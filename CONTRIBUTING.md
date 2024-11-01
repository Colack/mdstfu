# Contributing to mdstfu

Thank you for considering contributing to _mdstfu_! Contributions are essential for making this project better, and your support is greatly appreciated. Here's a guide to help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Settings Up](#settings-up)
- [Building the Project](#building-the-project)
- [Running Tests](#running-tests)
- [Making a Pull Request](#making-a-pull-request)
- [Issue Guidelines](#issue-guidelines)
- [Commit Guidelines](#commit-guidelines)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please review it to understand the expectations for all contributors.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- _Node.js_ (>= 14.x)
- _npm_ (>= 7.x)
- _Git_

### Setting Up

1. Fork and Clone the Repository:

```bash
git clone https://github.com/colack/mdstfu.git
cd mdstfu
```

2. Install Dependencies:

```bash
npm install
```

3. Verify the Setup by running the tests to make sure everything works:

```bash
npm test
```

Now, you're ready to start contributing!

## Building the Project

To build the project, run:

```bash
npm run build
```

The build output will be in the `dist/` directory. Ensure you rebuild after making changes to TypeScript files in the `src/` directory.

## Running Tests

We use [Jest](https://jestjs.io/) for testing. To run the tests, use:

```bash
npm test
```

To run tests in watch mode during development, use:

```bash
npm run test:watch
```

Before submitting any code, make sure that all tests pass.

## Making a Pull Request

To make a contribution:

1. _Create a Feature Branch_:

```bash
git checkout -b feature/my-feature
```

2. _Make your Changes_:

- Follow the [Commit Guidelines](#commit-guidelines).
- Add tests for any new features or bug fixes.
- Run `npm test` to ensure everything works.

3. _Push Your Changes_:

```bash
git push origin feature/my-feature
```

4. _Submit a Pull Request_:

- Go to the [pull requests](https://github.com/colack/mdstfu/pulls) tab on the repository.
- Submit a new pull request with a description of your changes.

## Issue Guidelines

When submitting a issue, please include:

- A clear title and description.
- Steps to reproduce the issue, if applicable.
- Relevant screenshots, code snippets, or error messages.

## Commit Guidelines

To maintain consistency, please follow these commit guidelines:

- _Format_: `type(scope): message`
  - _type_: Describes the kind of change (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`).
  - _scope_: Optional, describes what part of the project is affected.
  - _message_: A brief description of the change.

Examples:

- `feat(parser): add support for custom delimiters`
- `fix(parser): handle empty strings`

Thank you for your contributions! 🎉
