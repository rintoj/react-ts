# React TS

Create React apps using TypeScript 2, WebPack 2, StateX, Mocha, Chai, with pre-configured build scripts for dev and production. React TS works on macOS, Windows, and Linux. If something doesn’t work please file an issue.

## About

This project is configured with
  - [TypeScript](https://www.typescriptlang.org/)
  - [WebPack](https://webpack.js.org/)
  - [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) with app state preservation
  - [StateX](https://github.com/rintoj/statex) - (an implementation of flux)
  - [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/) for testing

## Usage

```bash

  Usage: react-ts [options] [command]

  Commands:

    create [options] <name>  Create react application with TypeScript and WebPack

      Options:
          -s, --skip-git     Skip git initialization
          -i, --install      Install node modules

    serve [port]             Serve the project
    build [environment]      Build the project

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

# Getting Started

## Installation

Install it once globally:

```bash
npm install -g react-ts
```

You’ll need to have Node >= 4 on your machine.

We strongly recommend to use Node >= 6 and npm >= 3 for faster installation speed and better disk usage. You can use nvm to easily switch Node versions between different projects.

## Creating an App

To create a new app, run:

```bash
react-ts create todo
cd todo
```
It will create a directory called `todo` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```bash
todo
├── LICENSE
├── README.md
├── docs/
├── package.json
├── src
│   ├── action
│   │   ├── index.ts
│   │   └── todo-action.ts
│   ├── app
│   │   ├── app.spec.tsx
│   │   ├── app.tsx
│   │   ├── index.ts
│   │   ├── todo-footer
│   │   │   ├── index.ts
│   │   │   ├── todo-filter.tsx
│   │   │   └── todo-footer.tsx
│   │   ├── todo-header
│   │   │   ├── index.ts
│   │   │   └── todo-header.tsx
│   │   └── todo-list
│   │       ├── index.ts
│   │       ├── todo-list.tsx
│   │       └── todo-item.tsx
│   ├── assets
│   │   ├── favicon.ico
│   │   └── logo.svg
│   ├── index.html
│   ├── index.tsx
│   ├── service
│   │   ├── index.ts
│   │   └── todo-service.ts
│   ├── state
│   │   ├── app-state.ts
│   │   ├── initial-state.ts
│   │   ├── index.ts
│   │   └── todo.ts
│   ├── store
│   │   ├── index.ts
│   │   └── todo-store.ts
│   └── style
│       └── app.scss
├── tsconfig.json
└── tslint.json
```

No configuration or complicated folder structures, just the files you need to build your app.
Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits and will preserve the state. You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the tests once. Project is compiled before running test cases, hence any error will cause the script to terminate even before running test cases.

### `npm run tdd` or `yarn tdd`

Runs the tests in watch mode. Restarts the tests, if either source code or the test file itself is changed.

### `npm run build` or `yarn build`

Builds the app for production to the build folder (`dist`). It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified. Your app is ready to be deployed!

# Contributing
I'd love to have your helping hand on this project. Feel free to contact [me](mailto:rintoj@gmail.com) or checkout my [GitHub](https://github.com/rintoj) page.

## Author

**Rinto Jose** (rintoj)

### Hope this module is helpful to you. Please make sure to checkout my other [projects](https://github.com/rintoj) and [articles](https://medium.com/@rintoj). Enjoy coding!

Follow me:
  [GitHub](https://github.com/rintoj)
| [Facebook](https://www.facebook.com/rinto.jose)
| [Twitter](https://twitter.com/rintoj)
| [Google+](https://plus.google.com/+RintoJoseMankudy)
| [Youtube](https://youtube.com/+RintoJoseMankudy)

## Versions
[Check CHANGELOG](https://github.com/rintoj/react-ts/blob/master/CHANGELOG.md)

## License
```
The MIT License (MIT)

Copyright (c) 2017 Rinto Jose (rintoj)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```