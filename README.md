# Gitignore Build Webpack Plugin

_Never mention webpack build directory in your gitignore_

No need to add gitignore entry for your webpack output. This plugin automagically excludes webpack output from git.

## Installation

```sh
yarn add gitignore-build-webpack-plugin
```

## Usage

Add plugin in your webpack config:

```js
const GitignoreBuildWebpackPlugin = require('gitignore-build-webpack-plugin');

plugins: [
  ...,
  new GitignoreBuildWebpackPlugin()
];
```

_That's it._
