# mdstfu

`mdstfu` is a powerful package for fetching and rendering Markdown files from the web or local sources. It supports caching, custom rendering, syntax highlighting, theming options, and event hooks, making it flexible for various use cases.

## Features

- **Fetch Markdown**: Load Markdown files from URLs or local paths.
- **Caching**: Automatically cache fetched Markdown to avoid redundant requests.
- **Custom Rendering**: Provide a custom rendering function to modify the output.
- **Syntax Highlighting**: Built-in support for syntax highlighting using Highlight.js.
- **Theming Options**: Apply custom themes for styling rendered Markdown.
- **Event Hooks**: Register listeners for various events like fetch start, fetch complete, and errors.
- **Error Handling**: Gracefully handle fetch errors and communicate them effectively.
- **Markdown Options**: Configure options for Markdown rendering with marked.js.
- **Version Control Integration**: Follow Semantic Versioning for project management.

## Installation

To install `mdstfu`, use npm:

```bash
npm install mdstfu
```

## Usage

Here's a basic example of how to use the `mdstfu` package:

```javascript
import { mdstfu } from 'mdstfu';

const markdownFetcher = new mdstfu('https://example.com/sample.md', undefined, {
    gfm: true,
    tables: true,
});

markdownFetcher.on('fetchStart', (url) => {
    console.log(`Fetching markdown from: ${url}`);
});

markdownFetcher.on('fetchComplete', (markdown) => {
    console.log('Fetch complete:', markdown);
});

markdownFetcher.on('fetchError', (error) => {
    console.error('Error fetching markdown:', error);
});

(async () => {
    try {
        await markdownFetcher.fetch();
        const renderedMarkdown = markdownFetcher.render();
        console.log(renderedMarkdown);
    } catch (error) {
        console.error('Failed to fetch and render markdown:', error);
    }
})();
```

## Options

### Constructor Parameters

- `url` (string): The URL or path of the Markdown file to fetch.
- `customRenderer` (function): A custom rendering function to modify the output.
- `markdownOptions` (object): Options for configuring the Markdown rendering with marked.js.
- `theme` (string): Custom theme styling for rendering.

#### Example Theme

You can define a custom theme like this:

```javascript
const customTheme = {
    heading: chalk.red,
    code: chalk.yellow,
    link: chalk.blue,
    text: chalk.white,
};

const markdownFetcher = new mdstfu('path/to/markdown.md', undefined, {}, customTheme);
```

### Event Hooks

You can listen for specific events using the `on` method:

- `fetchStart`: Triggered when fetching begins.
- `fetchComplete`: Triggered when fetching completes successfully.
- `fetchError`: Triggered when an error occurs during fetching.
- `renderComplete`: Triggered when the markdown is rendered.

#### Example of Event Hooks

```javascript
markdownFetcher.on('fetchStart', (url) => {
    console.log(`Started fetching from ${url}`);
});
```

### Error Handling

If an error occurs during fetching, it will be thrown as an exception. You can also listen for the `fetchError` event to handle errors gracefully.

### Testing

To run tests for `mdstfu`, use:

```bash
npm test
```

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.