import { marked, MarkedOptions } from 'marked';

// Check if running in Node.js
const isNode = typeof window === 'undefined';

/**
 * Fetch and render markdown files from the web with caching and custom rendering
 */
export class mdstfu {
    url: string;
    markdown: string;
    customRenderer?: (markdown: string) => string;
    markdownOptions: MarkedOptions;
    static cache: Map<string, string> = new Map();

    constructor(
        url: string,
        customRenderer?: (markdown: string) => string,
        markdownOptions?: MarkedOptions
    ) {
        this.url = url;
        this.markdown = '';
        this.customRenderer = customRenderer;
        this.markdownOptions = markdownOptions || {};
    }

    async fetch() {
        if (mdstfu.cache.has(this.url)) {
            this.markdown = mdstfu.cache.get(this.url) as string;
            return;
        }
    
        console.log('Fetching markdown...');
    
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            }
            this.markdown = await response.text();
    
            mdstfu.cache.set(this.url, this.markdown);
            console.log('Fetch complete!');
        } catch (error) {
            console.error('Error fetching markdown:', error);
            throw new Error(`Could not fetch markdown from URL: ${this.url}`);
        }
    }
    
    async render(): Promise<string> {
        // Ensure fetch is called before rendering
        if (!this.markdown) {
            await this.fetch();
        }

        const contentToRender = this.customRenderer ? this.customRenderer(this.markdown) : this.markdown;

        marked.setOptions(this.markdownOptions);
        const renderedMarkdown = marked(contentToRender);
        return renderedMarkdown; // No theme applied
    }
}
