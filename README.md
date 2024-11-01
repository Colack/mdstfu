# mdstfu

[![Venmo](https://img.shields.io/badge/Venmo-Click_here!-blue?style=for-the-badge&logo=venmo&logoColor=white&color=ff4b5c)](https://venmo.com/u/colackbtw)

`mdstfu` is a TypeScript utility for fetching, caching, and rendering Markdown from a specified URL. It uses the `marked` library to parse and render Markdown with support for customizable rendering options.

## Features

- Fetch Markdown content from a given URL
- Cache fetched content to minimize network requests
- Render Markdown content using `marked`
- Support for custom renderers and options for Markdown parsing

## Installation

Install via npm:

```bash
npm install marked
```

## Usage

### Import and Initialize

Import the `mdstfu` class and create an instance by providing a URL, an optional custom renderer, and optional Markdown options:

```typescript
import { mdstfu } from './path/to/mdstfu';
import { type MarkedOptions } from 'marked';

const url = 'https://example.com/markdown-file.md';
const options: MarkedOptions = { headerIds: false }; // Example option

const markdownRenderer = new mdstfu(url, undefined, options);
```

### Fetching and Rendering Markdown

Use the `fetch()` method to to retrieve the Markdown content from the specified URL. Once fetched, you can render the Markdown as HTML using the `render()` method:

```typescript
(async () => {
  await markdownRenderer.fetch();
  const htmlContent = await markdownRenderer.render();
  console.log(htmlContent);
})();
```

### Custom Renderer

Optionally,  you can provide a custom renderer function to modify the Markdown content before it is parsed and rendered:

```typescript
const customRenderer = (markdown: string) => markdown.replace('# ', '## ');

const markdownRenderer = new mdstfu(url, customRenderer);

(async () => {
  await markdownRenderer.fetch();
  const htmlContent = await markdownRenderer.render();
  console.log(htmlContent);
})();
```

## API

### `mdstfu`

The `mdstfu` class provides methods to fetch and render Markdown content.

#### Constructor

```typescript
constructor(
  url: string,
  customRenderer?: (markdown: string) => string,
  markdownOptions?: MarkedOptions,
)
```

- `url`: The URL of the Markdown file to fetch.
- `customRenderer`: An optional custom renderer function to modify the Markdown content before rendering.
- `markdownOptions`: Optional options to customize the Markdown rendering.

#### Methods

- `fetch(): Promise<void>`: Fetches the Markdown content from the specified URL.
- `render(): Promise<string>`: Renders the fetched Markdown content as HTML.

### Static Properties

- `mdstfu.cache: Map<string, string>`: A static cache to store fetched Markdown content.

## Error Handling

- *Invalid URL*: If the URL is invalid or the request fails, an error will be thrown.
- *Fetch Error*: If the fetch request fails, an error will be thrown.

## Dependencies

- [marked](https://www.npmjs.com/package/marked): A Markdown parser and compiler.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Supporters

Thanks to all the contributors who have helped make this project possible!

![Contributors](https://contrib.rocks/image?repo=colack/mdstfu)
