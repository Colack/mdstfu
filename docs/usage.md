# Usage Guide for `mdstfu`

## Installation

```bash
npm install mdstfu
```

## Basic Usage

```typescript
import { mdstfu } from 'mdstfu';

const renderer = new mdstfu('https://example.com/markdown.md');

renderer.render().then((html) => {
  console.log(html);
});
```

## Advanced Usage

### Custom Render Function

Pass a custom render function to manipulate the fetched Markdown before rendering:

```typescript
const customRenderer = new mdstfu(
  'https://example.com/markdown.md',
  (markdown) => markdown.toUpperCase(),
);
```

### Options for Markdown Rendering

```typescript
const rendererWithOptions = new mdstfu(
  'https://example.com/markdown.md',
  undefined,
  {
    breaks: true,
    gfm: true,
  },
);
```
