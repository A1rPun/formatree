'use strict';
module.exports = (structure = {}, options = {}) => {
  const newLine = '\n';
  const limit = options.limit;
  const spacing = options.spacing;
  const values = options.values;
  const header = options.header === '' ? '' : (options.header || '.') + newLine;
  const footer = options.footer || '';
  const sibling = options.sibling || '├── ';
  const lastSibling = options.lastSibling || '└── ';
  const indent = options.indent || '│   ';
  const lastIndent = options.lastIndent || '    ';
  const parent = options.parent || '';
  const formatree = (obj, result, prepend, level) => {
    if (limit && level >= limit)
      return result;
    let i = 0;
    const lastIndex = Object.keys(obj).length - 1;
    for (let prop in obj){
      let val = obj[prop];
      result += spacing ? (prepend + indent + newLine).repeat(spacing) : '';
      result += prepend + (i === lastIndex ? lastSibling : sibling) + prop;
      result += typeof val === 'object'
        ? formatree(
          val,
          parent + newLine,
          prepend + (i === lastIndex ? lastIndent : indent),
          level + 1,
        )
        : (values ? ` (${val})` : '') + newLine;
      i++;
    }
    return result;
  };
  return formatree(structure, header, '', 0) + footer;
};
