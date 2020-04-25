'use strict';

const _ = require('lodash');
const chokidar = require('chokidar');
const path = require('path');
const renderAssets = require('./render-assets');
const renderHtml = require('./render-html');
const renderScripts = require('./render-scripts');
const renderSCSS = require('./render-scss');

const watcher = chokidar.watch('src', {
    persistent: true,
});

let READY = false;

process.title = 'html-watch';
process.stdout.write('Loading');
let allHtmlFiles = {};

watcher.on('add', filePath => _processFile(filePath, 'add'));
watcher.on('change', filePath => _processFile(filePath, 'change'));
watcher.on('ready', () => {
    READY = true;
    console.log(' READY TO ROLL!');
});

_handleSCSS();

function _processFile(filePath, watchEvent) {
    
    if (!READY) {
        if (filePath.match(/\.html$/)) {
            if (!filePath.match(/includes/) && !filePath.match(/mixins/) && !filePath.match(/\/html\/layouts\//)) {
                allHtmlFiles[filePath] = true;
            }    
        }    
        process.stdout.write('.');
        return;
    }

    console.log(`### INFO: File event: ${watchEvent}: ${filePath}`);

    if (filePath.match(/\.html$/)) {
        return _handleHtml(filePath, watchEvent);
    }

    if (filePath.match(/\.scss$/)) {
        if (watchEvent === 'change') {
            return _handleSCSS(filePath, watchEvent);
        }
        return;
    }

    if (filePath.match(/src\/js\//)) {
        return renderScripts();
    }

    if (filePath.match(/src\/assets\//)) {
        return renderAssets();
    }

}

function _handleHtml(filePath, watchEvent) {
    if (watchEvent === 'change') {
        if (filePath.match(/includes/) || filePath.match(/mixins/) || filePath.match(/\/html\/layouts\//)) {
            return _renderAllHtml();
        }
        return renderHtml(filePath);
    }
    if (!filePath.match(/includes/) && !filePath.match(/mixins/) && !filePath.match(/\/html\/layouts\//)) {
        return renderHtml(filePath);
    }
}

function _renderAllHtml() {
    console.log('### INFO: Rendering All');
    _.each(allHtmlFiles, (value, filePath) => {
        renderHtml(filePath);
    });
}

function _handleSCSS() {
    renderSCSS();
}