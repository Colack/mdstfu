# mdstfu

[![Venmo](https://img.shields.io/badge/Venmo-Click_here!-blue?style=for-the-badge&logo=venmo&logoColor=white&color=ff4b5c)](https://venmo.com/u/colackbtw)

`mdstfu` is a TypeScript library that fetches and renders Markdown files from the web, with built-in caching and support for customizable rendering using the `marked` library. This project provides a flexible way to retrieve, cache, and convert Markdown content to HTML.

## Features

- _Fetch Markdown_ from a specified URL.
- _Cache Fetched Content_ to minimize network requests and improve performance.
- _Custom Rendering Support_ via a user-defined functin.
- _Configurable Parsing Options_ with the `marked` library.

## Installation

Install `mdstfu` via npm:

```bash
npm install mdstfu
```

## Usage

### Importing the Library

```typescript
import { mdstfu } from 'mdstfu';
```

### Creating an Instance

To use the `mdstfu` class, create an instance with the URL of the Markdown file. Optionally,
