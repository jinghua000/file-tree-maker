const createTree = require('.')
const path = require('path')
const DIR = path.join(__dirname, 'demo')
const JSON_DATA = {
    "children": [
        {
            "fullpath": __dirname + "/demo/bar.txt",
            "name": "bar.txt",
            "type": "file"
        },
        {
            "children": [
                {
                    "fullpath": __dirname + "/demo/baz/foobar.txt",
                    "name": "foobar.txt",
                    "type": "file"
                }
            ],
            "fullpath": __dirname + "/demo/baz",
            "name": "baz",
            "type": "dir"
        },
        {
            "children": [
                {
                    "fullpath": __dirname + "/demo/foo/foo.txt",
                    "name": "foo.txt",
                    "type": "file"
                }
            ],
            "fullpath": __dirname + "/demo/foo",
            "name": "foo",
            "type": "dir"
        }
    ],
    "fullpath": __dirname + "/demo",
    "name": "demo",
    "type": "dir"
}

test('entry', () => {

    expect(createTree({
        entry: DIR
    })).toEqual(JSON_DATA)

})

test('exclude', () => {
    const object = JSON.parse(JSON.stringify(JSON_DATA))
    const index = object.children.findIndex(child => child.name === 'baz')
    object.children.splice(index, 1)

    expect(createTree({
        entry: DIR,
        exclude: [/baz/],
    })).toEqual(object)

})