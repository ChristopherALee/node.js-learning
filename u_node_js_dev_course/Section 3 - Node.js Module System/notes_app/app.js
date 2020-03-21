// Load Node.js Core Modules
// fs = fileSystem
const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by Node.js.");

fs.appendFileSync("notes.txt", " This sentence was appended by Node.js.");

// --------------------------------------------------

// importing my own files
const utils = require("./utils.js");
console.log(utils(1, 2)); // 3

const notes = require("./notes");
console.log(notes()); // Your notes...

// --------------------------------------------------

// importing locally installed npm packages
const validator = require("validator");
console.log(validator.isEmail("test@example.com")); // true
console.log(validator.isURL("example.com")); // true

const chalk = require("chalk");
console.log(chalk.green("Success!")); // prints 'Success!' in green text
console.log(chalk.bold.green("Success!")); // prints 'Success!' in bold green text
console.log(chalk.inverse.blue("Success!")); // prints 'Success!' in inverted background and foreground colors

// global npm packages
// globally installed nodemon to watch for node changes
