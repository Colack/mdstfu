# Usage

Here’s a basic example of how to use the `mdstfu` package:

```javascript
import { mdstfu } from 'mdstfu';

const markdownFetcher = new mdstfu('https://example.com/file.md');

async function fetchAndRender() {
    try {
        await markdownFetcher.fetch();
        const renderedMarkdown = markdownFetcher.render();
        console.log(renderedMarkdown);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAndRender();
```
