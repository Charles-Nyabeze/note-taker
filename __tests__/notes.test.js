const fs = require("fs");

//input functions
const {
    createNewNote,
    validateNote,
  } = require("../lib/notes");
  
//input note data
const { notes } = require("../data/notes.json");
  
//mock fs file creation
  jest.mock('fs')

//confirm animal creation
test("creates a note object", () => {
    const note = createNewNote(
      { title: "Jake", text: "write" },
      notes
    );
  
    expect(note.title).toBe("Jake");
    expect(note.text).toBe("write");
  });

//confirm notes are input properly
test("validates note sections", () => {
    const note = {
      title: "Hey",
      text: "what up"
    };
  
    const invalidNote = {
      title: "Hello",
      text: ""
    };
  
    const result = validateNote(note);
    const result2 = validateNote(invalidNote);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });