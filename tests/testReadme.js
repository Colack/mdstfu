const mdstfu = require('../dist/index.mjs');

const md = new mdstfu.mdstfu('https://raw.githubusercontent.com/colack/colack/main/README.md');
md.fetch().then(() => {
    console.log(md.render());
});