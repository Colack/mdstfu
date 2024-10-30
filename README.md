# mdstfu

[![Venmo](https://img.shields.io/badge/Venmo-Click_here!-blue?style=for-the-badge&logo=venmo&logoColor=white&color=ff4b5c)](https://venmo.com/u/colackbtw)

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
