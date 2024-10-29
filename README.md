# mdstfu

Take markdown files and convert them to HTML.

## Installation

```bash
npm install mdstfu
```

## Usage

```javascript
const mdstfu = require('mdstfu');

const md = new mdstfu.mdstfu('https://raw.githubusercontent.com/colack/colack/main/README.md');
md.fetch().then(() => {
    console.log(md.render());
});
```
