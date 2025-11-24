const { Console } = require('console');
const path = require('path');

// print seperator
console.log(path.sep); // output: \

// process.env.PATH prints the list of directories where the operating system looks for executable commands.
// console.log(process.env.path);

// print OS-specific delimiter
console.log(path.delimiter)

const path1 = '/public_html/home/index.html';

const currentFilePath = __filename;
console.log(currentFilePath)  // return full path of current file with file

const currentDirName = __dirname;
console.log(currentDirName); // return full path without file

console.log(path.basename(currentFilePath)); // return last portion of path

console.log(path.basename(currentFilePath, ".js")); // return last portion of path without extainsion

console.log(path.dirname(currentFilePath)); // return folder path of a file

console.log(path.extname(currentFilePath)); // return extainsion of a file from given path

// creates a full file path
console.log(path.format({
    dir: '\\public_html\\home',
    base: 'index.html'
}));

console.log((path.isAbsolute(currentFilePath))); // check path is absolute or relative

console.log(path.join('\\home', 'js', 'dist', 'index.js')); // join One or More path segment into a single path

//cleans and formats a file path
console.log(path.normalize('E:\NodeJS\\\\path-module/../index.js'));

console.log(path.parse(currentFilePath)); //break full file path into small pieces

console.log(path.relative('\\home\\user\\config', '\\home\\user\\js')); //navigate from one directory to another directory.

console.log(path.resolve('folder', 'index.html')); //It returns the absolute (full) path.






