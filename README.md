# react-universal-starter

## Features

- Server-rendered [`react`](https://github.com/facebook/react) + [`react-redux`](https://github.com/reduxjs/react-redux) for binding.
- Predictable state management and server-side's initial state with [`redux`](https://github.com/reduxjs/redux) library, in modular pattern.
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) support for better Redux debugging experience.
- Static route configuration with [`react-router-config`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) for React Router.
- Enforce convention and avoid errors with code linter and formatter. ([`eslint`](https://github.com/eslint/eslint), [`prettier`](https://github.com/prettier/prettier))

## Requirement

Before you proceed, please make sure your machine has met the following requirements:

| Dependency |   Version   |
| ---------- | :---------: |
| Node       | >= v10.13.0 |
| NPM        |  >= v6.4.1  |

> **React v16.8.3 or later** is required as this starter is using react-redux v7 for React binding.

## Quick Start

i) Installation

```bash
# cloning git repository into `my-project` folder
git clone --depth=1 https://github.com/sanigame/react-universal-starter my-project

# install project dependencies
cd my-project && npm install
```

ii) Setup environment

Copy `.env.example` to `.env` for setup environment variables usage:

```bash
cp .env.example .env
```

Change environment variables in `.env` to serve your app.

iii) Running app (for development)

```bash
npm start
```

iv) Running app (for server side)

```bash
npm run server
```
