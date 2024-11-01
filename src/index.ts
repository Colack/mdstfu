import { type MarkedOptions, marked } from 'marked';

const isNode = typeof window === 'undefined';

export class mdstfu {
  url: string;
  markdown: string;
  customRenderer?: (markdown: string) => string;
  markdownOptions: MarkedOptions;
  static cache: Map<string, string> = new Map();

  constructor(
    url: string,
    customRenderer?: (markdown: string) => string,
    markdownOptions?: MarkedOptions,
  ) {
    try {
      this.url = new URL(url).toString();
    } catch {
      throw new Error('Invalid URL format');
    }
    this.markdown = '';
    this.customRenderer = customRenderer;
    this.markdownOptions = markdownOptions || {};
  }

  async fetch(): Promise<void> {
    const cachedMarkdown = mdstfu.cache.get(this.url);
    if (cachedMarkdown !== undefined) {
      this.markdown = cachedMarkdown;
      return;
    }

    try {
      const response = await fetch(this.url);
      if (!response.ok)
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      this.markdown = await response.text();
      mdstfu.cache.set(this.url, this.markdown);
    } catch (error) {
      console.error('Fetching failed:', error);
      throw error;
    }
  }

  async render(): Promise<string> {
    if (!this.markdown) await this.fetch();

    const contentToRender = this.customRenderer
      ? this.customRenderer(this.markdown)
      : this.markdown;
    return marked(contentToRender, this.markdownOptions);
  }
}
