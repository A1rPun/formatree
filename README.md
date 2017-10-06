# formatree
> Format a tree like structure to a depth indented string

## Install
```
$ npm i -g formatree
```

## Usage
```js
const formatree = require('formatree');
const tree = { foo: { bar: 0 }, baz: 1, qux: { quux: 2 } };
formatree(tree);
// .
// ├── foo
// │   └── bar
// ├── baz
// └── qux
//     └── quux
// 
formatree(tree, { limit: 1, spacing: 1, values: true });
// .
// │   
// ├── foo
// │   
// ├── baz (1)
// │   
// └── qux
// 
formatree(tree, { sibling: '|-- ', lastSibling: '`-- ', indent: '|   ' });
// .
// |-- foo
// |   `-- bar
// |-- baz
// `-- qux
//     `-- quux
// 
```

## API

### formatree(input, [options])

#### input

Type: `object`

The tree structure that needs to be formatted.

#### options

Type: `Object`

##### limit

Type: `number`  
Default: `0`

Limit the tree at a specific branch depth, 0 is no limit.

##### spacing

Type: `number`  
Default: `0`

Add some extra lines between the tree branches, 0 is no spacing.

##### values

Type: `boolean`  
Default: `false`

Show the values of the siblings in the tree

##### header

Type: `string`  
Default: `.`

The first line of the tree

##### footer

Type: `string`  
Default: empty

The last line of the tree

##### parent

Type: `string`  
Default: ``

Append a string after a parent branch in the tree

##### sibling

Type: `string`  
Default: `├── `

##### lastSibling

Type: `string`  
Default: `└── `

##### indent

Type: `string`  
Default: `│   `

##### lastIndent

Type: `string`  
Default: `    `

## Themes
##### ASCII
```
{sibling: '|-- ',lastSibling: '`-- ',indent: '|   '}
```
##### Clean
```
{header: '',sibling: ' ',lastSibling: ' ',indent: '  ',lastIndent: '  ', footer: ''}
```
##### 101010
```
{header: '0',sibling: '101 ',lastSibling: '101 ',indent: '1010',lastIndent: '1010'}
```
##### Stripes
```
{sibling: '─ ',lastSibling: '─ ',indent: '──',lastIndent: '──'}
```
##### Arrows
```
{header: 'v',sibling: '> ',lastSibling: '> ',indent: '>>',lastIndent: '>>', footer: '^'}
```

## Related

- [formatree-cli](https://github.com/A1rPun/formatree-cli) - CLI for this module

## License

MIT © [A1rPun](https://github.com/A1rPun)
