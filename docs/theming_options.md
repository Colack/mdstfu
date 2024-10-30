# Theming Options

The `mdstfu` class allows you to customize the appearance of rendered Markdown through theming.

## Theme Properties

- **heading**: Color for headings.
- **code**: Color for inline code snippets.
- **link**: Color for links.
- **text**: Color for plain text.

## Example

```javascript
const theme = {
    heading: chalk.magenta,
    code: chalk.green,
    link: chalk.yellow,
    text: chalk.white,
};

const markdownFetcher = new mdstfu(url, undefined, undefined, theme);
```
