import { marked } from 'marked';
import { promises as fs } from 'fs';
import hljs from 'highlight.js';
import chalk from 'chalk';

// Check if running in Node.js
const isNode = typeof window === 'undefined';

/**
 * Fetch and render markdown files from the web or local files with caching and custom rendering
 */
export class mdstfu {
    url: string;
    markdown: string;
    customRenderer?: (markdown: string) => string;
    markdownOptions: marked.MarkedOptions;
    theme: { [key: string]: string }; // Theme options
    static cache: Map<string, string> = new Map();
    private events: { [key: string]: Function[] } = {}; // Event hooks

    /**
     * Create a new instance of mdstfu
     * @param url The URL or path of the markdown file to fetch
     * @param customRenderer An optional function to render the markdown
     * @param markdownOptions An optional object for markdown rendering options
     * @param theme An optional theme object for styling
     */
    constructor(
        url: string,
        customRenderer?: (markdown: string) => string,
        markdownOptions?: marked.MarkedOptions,
        theme?: { [key: string]: string }
    ) {
        this.url = url;
        this.markdown = '';
        this.customRenderer = customRenderer;
        this.markdownOptions = markdownOptions || {};
        this.theme = theme || {
            heading: chalk.blue,
            code: chalk.green,
            link: chalk.cyan,
            text: chalk.white,
        };
    }

    /**
     * Register an event listener for a specific event
     * @param event The event name
     * @param listener The listener function to call when the event occurs
     */
    on(event: string, listener: Function) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    /**
     * Trigger an event, calling all registered listeners
     * @param event The event name
     * @param args The arguments to pass to the listener functions
     */
    private trigger(event: string, ...args: any[]) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    /**
     * Fetch the markdown file from the web, local file, or return from cache
     * @throws Will throw an error if the fetch fails
     */
    async fetch() {
        // Check if the URL is already cached
        if (mdstfu.cache.has(this.url)) {
            this.markdown = mdstfu.cache.get(this.url) as string;
            this.trigger('fetchComplete', this.markdown); // Trigger fetch complete event
            return; // Return cached markdown
        }

        this.trigger('fetchStart', this.url); // Trigger fetch start event
        console.log(this.theme.text('Fetching markdown...'));

        try {
            if (isNode) {
                this.markdown = await fs.readFile(this.url, 'utf-8');
            } else {
                // Browser environment - check if it's a local file path
                if (this.url.startsWith('file://')) {
                    const response = await fetch(this.url);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                    }
                    this.markdown = await response.text();
                } else {
                    // Convert GitHub URLs to raw content format
                    if (this.url.includes('github.com')) {
                        this.url = this.url.replace('github.com', 'raw.githubusercontent.com');
                        this.url = this.url.replace('/blob', '');
                    }
                    const response = await fetch(this.url);
                    // Check if the response is successful
                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                    }
                    this.markdown = await response.text();
                }
            }

            // Cache the fetched markdown
            mdstfu.cache.set(this.url, this.markdown);
            console.log(this.theme.text('Fetch complete!'));
            this.trigger('fetchComplete', this.markdown); // Trigger fetch complete event
        } catch (error) {
            console.error(this.theme.text('Error fetching markdown:'), error);
            this.trigger('fetchError', error); // Trigger fetch error event
            throw new Error(`Could not fetch markdown from URL: ${this.url}`);
        }
    }

    /**
     * Render the markdown file with syntax highlighting and options
     * @returns The rendered markdown
     */
    render() {
        // Use a custom renderer if provided, otherwise use the raw markdown
        const contentToRender = this.customRenderer ? this.customRenderer(this.markdown) : this.markdown;

        // Set up marked options to use highlight.js for code blocks and custom options
        marked.setOptions({
            ...this.markdownOptions,
            highlight: (code, language) => {
                const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
                return hljs.highlight(validLanguage, code).value;
            },
        });

        const renderedMarkdown = marked(contentToRender);
        this.trigger('renderComplete', renderedMarkdown); // Trigger render complete event
        return this.applyTheme(renderedMarkdown);
    }

    /**
     * Apply theme styles to rendered markdown
     * @param markdown The rendered markdown
     * @returns The themed markdown
     */
    private applyTheme(markdown: string): string {
        return markdown
            .replace(/(#{1,6})\s*(.*)/g, (match, level, text) => this.theme.heading(text)) // Headings
            .replace(/`([^`]+)`/g, (match, code) => this.theme.code(code)) // Inline code
            .replace(/\[([^[]+)\]\(([^)]+)\)/g, (match, text, url) => `${this.theme.link(text)}(${url})`); // Links
    }
}
