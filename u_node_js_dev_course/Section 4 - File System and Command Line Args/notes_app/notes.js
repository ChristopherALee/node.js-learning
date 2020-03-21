const fs = require("fs");
const { promisify } = require("util");
const chalk = require("chalk");
const writeFile = promisify(fs.writeFile);

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  if (notes.some(note => note.title === title)) {
    console.log(chalk.inverse.red("This note already exists!"));
  } else {
    notes.push({ title, body });
    saveNotes(notes).then(() =>
      console.log(chalk.inverse.green("Note added!"))
    );
  }
};

const removeNote = title => {
  let notes = loadNotes();

  if (notes.some(note => note.title === title)) {
    notes = notes.filter(note => note.title !== title);
    saveNotes(notes).then(() =>
      console.log(chalk.inverse.green("Note removed!"))
    );
  } else {
    console.log(chalk.inverse.red("The note does not exist!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = async function(notes) {
  const dataJSON = JSON.stringify(notes);
  await writeFile("notes.json", dataJSON, err => {
    if (err) throw error;
  });
  console.log("Notes saved!", notes);
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
