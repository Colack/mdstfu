# Event Hooks

You can listen for specific events during the lifecycle of fetching and rendering Markdown.

## Available Events

- **fetchStart**: Fired when fetching starts. Provides the URL.
- **fetchComplete**: Fired when fetching completes. Provides the fetched Markdown.
- **fetchError**: Fired when an error occurs during fetching. Provides the error.
- **renderComplete**: Fired when rendering is complete. Provides the rendered Markdown.

## Example

```javascript
markdownFetcher.on('fetchStart', (url) => {
    console.log(`Starting to fetch from: ${url}`);
});
```
