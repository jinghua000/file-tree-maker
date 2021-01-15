interface FileObject {
    name: string,
    fullpath: string,
    type: 'file' | 'dir',
    children?: FileObject[],
}

interface Configuration {
    entry: string,
    exclude?: RegExp[],
}

function createTree(options: Configuration): FileObject
export = createTree;