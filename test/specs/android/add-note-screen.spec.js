const addNoteScreen = require("../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip Tutorial', async () => {
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
    });
    //coment

    it('add a note, save changes & verify note', async () => {
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        //add a note title
        await addNoteScreen.noteHeading.addValue("Fav Anime List");

        //add a body note
        await addNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

        //save the changes
        await addNoteScreen.saveNote()

        //assert
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
    });
});
