/*
    mdstfu - Fetch and render markdown files from the web
*/

import { marked} from 'marked';

/**
 * Fetch and render markdown files from the web
 */
export class mdstfu {
    url: string;
    markdown: string;

    /**
     * Create a new instance of mdstfu
     * @param url The URL of the markdown file to fetch
     */
    constructor(url: string) {
        this.url = url;
        this.markdown = '';
    }

    /**
     * Fetch the markdown file from the web
     */
    async fetch()
    {
        if (this.url.includes('github.com')) {
            this.url = this.url.replace('github.com', 'raw.githubusercontent.com');
            this.url = this.url.replace('/blob', '');
        }

        const response = await fetch(this.url);
        this.markdown = await response.text();
    }

    /**
     * Render the markdown file
     * @returns The rendered markdown
    */
    render()
    {
        return marked(this.markdown);
    }
}