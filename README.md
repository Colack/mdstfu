# mdstfu

`mdstfu` is a TypeScript library designed to fetch and render Markdown files from the web with caching capabilities and customizable rendering options. This project utilizes the `marked` library to convert Markdown to HTML.

## Features

- Fetch Markdown content from a specified URL.
- Cache fetched Markdown to minimize network requests.
- Support for custom rendering through a user-defined renderer function.
- Configurable Markdown parsing options.

## Installation

You can install `mdstfu` via npm:

```bash
npm install mdstfu
```

## Usage

### Importing the Library

```typescript
import { mdstfu } from 'mdstfu';
```

### Creating an Instance

To use the `mdstfu` class, create a instance with the URL of the Markdown file you want to fetch. You can also provide an optional custom renderer and Markdown options.

```typescript
const url = 'https://example.com/sample.md';
const customRenderer = (markdown: string) => {
    // Modify the markdown here if needed
    return markdown.replace(/some text/g, 'replacement text');
};

const markdownOptions = {
    // Your marked options
};

const markdownFetcher = new mdstfu(url, customRenderer, markdownOptions);
```

### Fetching and Rendering Content

You can fetch and render Markdown content as follows:

```typescript
async function renderMarkdown() {
    try {
        await markdownFetcher.fetch();  // Fetches and caches the markdown
        const renderedHTML = await markdownFetcher.render();  // Renders the markdown to HTML
        console.log(renderedHTML);  // Output the rendered HTML
    } catch (error) {
        console.error(error);
    }
}

renderMarkdown();
```

### API

`constructor(url: string, customRenderer?: (markdown: string) => string, markdownOptions?: MarkedOptions)`

- `url`: The URL of the Markdown file to fetch.
- `customRenderer`: A custom renderer function to modify the fetched Markdown content.
- `markdownOptions`: Options to pass to the `marked` library.

`async fetch()`

Fetches the Markdown from the provided URL and caches it for future requests.

`async render(): Promise<string>`

Renders the fetched Markdown as HTML. If the Markdown has not been fetched yet, it automatically calls `fetch()`.

### Caching

`mdstfu` implements a simple caching mechanism using a `Map` to store previously fetched Markdown content. If the same URL is requested again, it will return the cached content instead of making a new network request.

### Error Handling

Errors encountered during the fetching process are logged to the console, and a descriptive error is thrown. Ensure to handle these errors appropriately in your application.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Supporters

Thanks to all the contributors who have helped make this project possible!

![Contributors](https://contrib.rocks/image?repo=colack/mdstfu)
