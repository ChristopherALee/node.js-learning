const fs = require("fs");
const { promisify } = require("util");
const chalk = require("chalk");
const writeFile = promisify(fs.writeFile);

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.yellow("Your notes:"));
  notes.forEach((note, idx) =>
    console.log(`${idx + 1}.`, `${note.title}`, `\n`)
  );
};

const addNote = (title, body) => {
  const notes = loadNotes();

  if (notes.find(note => note.title === title)) {
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

  if (notes.find(note => note.title === title)) {
    notes = notes.filter(note => note.title !== title);
    saveNotes(notes).then(() =>
      console.log(chalk.inverse.green("Note removed!"))
    );
  } else {
    console.log(chalk.inverse.red("The note does not exist!"));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.yellow(`${note.title}:`));
    console.log(note.body);
  } else {
    console.log(chalk.inverse.red("Note not found!"));
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

const saveNotes = async notes => {
  const dataJSON = JSON.stringify(notes);
  await writeFile("notes.json", dataJSON, err => {
    if (err) throw error;
  });
  console.log("Notes saved!", notes);
};

module.exports = {
  listNotes,
  readNote,
  addNote,
  removeNote
};
