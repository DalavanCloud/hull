const { resolve } = require('path');

const pathExists = require('path-exists');
const { copyFiles } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  '.circleci/config.yml',
  '.vscode/launch.json',
  '.vscode/settings.json',
  '.editorconfig',
  '.eslintrc.json',
  '.prettierrc',
  'commitlint.config.js',
  'LICENSE',
  'tsconfig.json',
  'tslin.json',
];

module.exports = () => {
  copyFiles(__dirname, files);
};