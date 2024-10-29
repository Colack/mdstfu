# mdstfu

A simple tool to fetch markdown files from any URL.

## Installation

```bash
npm install mdstfu
```

## Usage

```javascript
const fetcher = require('mdstfu');

fetcher.fetch('https://raw.githubusercontent.com/username/repo/master/README.md')
  .then((markdown) => {
    console.log(markdown);
  })
  .catch((error) => {
    console.error(error);
  });
```

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
