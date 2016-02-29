# babel-preset-save

> A babel preset for transforming your JavaScript for Save.co applications

## Install

```sh
$ npm install --save-dev babel-preset-save
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["save"]
}
```

### Via CLI

```sh
$ babel script.js --presets save
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["save"]
});
```
