'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');
const prettier = require('prettier');

module.exports = function renderHtml(filePath) {
    const destPath = filePath.replace(/src\/html\//, 'dist/');

    const srcPath = upath.resolve(upath.dirname(__filename), '../src');

    const html = fs.readFileSync(filePath, "utf8");

    console.log(`### INFO: Rendering ${filePath} to ${destPath}`);

    const destPathDirname = upath.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    const prettified = prettier.format(html, {
        printWidth: 1000,
        tabWidth: 4,
        singleQuote: true,
        proseWrap: 'preserve',
        endOfLine: 'lf',
        parser: 'html'
    });

    fs.writeFileSync(destPath, prettified);
};
