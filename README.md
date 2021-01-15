# file-tree-maker

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

Path of the file or the directory, fullpath recommended.

> e.g. - `absolute/path/my/dir`

### exclude - `Array<RegExp>`

The **fullpath** matched one of the supplied regular expressions will be skipped.

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

## Full Demo

