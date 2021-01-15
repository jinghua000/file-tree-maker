'use strict'

const path = require('path')
const fs = require('fs')

const Queue = require('tiny-linked-queue')
const queue = new Queue()
const TYPES = ['file', 'dir']
const DEFAULT_OPTIONS = {
    entry: '',
    exclude: [],
}

function createObject(fullpath) {
    const stat = fs.statSync(fullpath)
    let object

    const commonAttrs = {
        fullpath,
        name: path.basename(fullpath),
    }

    if (stat.isFile()) {
        object = {
            ...commonAttrs,
            type: TYPES[0],
        }
    } else if (stat.isDirectory()) {
        object = {
            ...commonAttrs,
            type: TYPES[1],
            children: [],
        }
    }

    return object
}

function createTree(options) {
    options = Object.assign({}, DEFAULT_OPTIONS, options)
    const { entry, exclude } = options
    const result = createObject(entry)

    if (result.type === TYPES[1]) {
        queue.enqueue(result)

        while (!queue.isEmpty) {
            const parent = queue.dequeue()
            const parentpath = parent.fullpath
            const paths = fs.readdirSync(parentpath)

            for (const pathname of paths) {
                const newpath = path.join(parentpath, pathname)
                
                if (exclude.some(reg => reg.test(newpath))) { 
                    continue 
                }

                const child = createObject(newpath)
                parent.children.push(child)

                if (child.type === TYPES[1]) {
                    queue.enqueue(child)
                }
            }
        }
    }

    return result
}

module.exports = createTree