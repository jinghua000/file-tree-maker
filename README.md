# file-tree-maker

[![npm module](https://badge.fury.io/js/file-tree-maker.svg)](https://www.npmjs.com/package/file-tree-maker)

## Introduction

Make the file tree recursively. 

Internal implemention used `bfs (breadth first search)`.

## Usage

In Node environment.

`npm i file-tree-maker`

```js
const makeTree = require('file-tree-maker')

makeTree(options) // => pass the `configuration`, and return the `result`, see next.

```
## Configuration

### entry - `string` 

Path of the file or the directory, absolute path is recommended.

> e.g. - `absolute/path/my/dir`

### exclude - `Array<RegExp>`

The **fullpath** of the object matched one of the supplied regular expressions will be skipped.

And do no effect to `entry` option.

> e.g. - `[/node_modules/, /\.ingore/]`

## Result Structure

```js
{
    type: 'file | dir' // => file or directory
    name: 'my_dir_name', // => file or directory name
    fullpath: 'absolute/path/my/dir', // => fullpath
    children: [], // => exists if type is `dir`, children's structure is same as parent's.
}
```

## Tests

`yarn test`

