// getting user inputs
// console: node app.js iaminput
const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notesUtil = require("./notes");

yargs.version("1.1.0");

// Create add command
// node app.js add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    const { title, body } = argv;
    notesUtil.addNote(title, body);
  }
});

// Create remove command
// node app.js remove
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    const { title } = argv;
    notesUtil.removeNote(title);
  }
});

// Create list command
// node app.js list
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    console.log("Listing all notes!");
  }
});

// Create read command
// node app.js read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note!");
  }
});

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();
