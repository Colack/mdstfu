# API Reference

## mdstfu Class

### Constructor

```typescript
constructor(url: string, customRenderer?: (markdown: string) => string, markdownOptions?: marked.MarkedOptions, theme?: { [key: string]: string });
```

- Url: The URL of the Markdown file to fetch.
- CustomRenderer: A function that takes a string of Markdown and returns a string of HTML.
- MarkdownOptions: Options to pass to the `marked` library.
- Theme: A theme object that maps CSS properties to values.

### Methods

`fetch()`
Fetches the Markdown file. Throws an error if the fetch fails.

`render()`
Renders the fetched Markdown and applies theming.

### Event Hooks

- `fetchStart`: Triggered when fetching begins
- `fetchComplete`: Triggered when fetching completes
- `fetchError`: Triggered when fetching fails
- `renderComplete`: Triggered when rendering completes
