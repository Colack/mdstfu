export interface CustomMarkdownOptions {
  url: string;
  customRenderer?: (markdown: string) => string;
  markdownOptions?: MarkedOptions;
}
