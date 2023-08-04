const editNoteScreen = require("../screenobjects/android/edit-note.screen");

describe('Delete Note 1', () => {
    it('Delete a note & check the note in trash can 1', async () => {
        await editNoteScreen.skipTutorial();
        await editNoteScreen.addAndSaveNote("Fav Anime List", "Naruto\nOnePiece\nAOT");


        await driver.back();
        
        const note = await editNoteScreen.firstNote.getText();

        //click on the note
        await editNoteScreen.firstNote.click();

        //click on more icon
        await editNoteScreen.moreIcon.click();

        //click on delete item
        await editNoteScreen.deleteIcon.click();

        //assert
        await driver.acceptAlert();

        //click on nav icon
        await editNoteScreen.navIcon.click();

        //click on trash can item
        await editNoteScreen.trashCanItem.click();

        //assert
        const trashCanItem = await editNoteScreen.firstNote;

        await expect(trashCanItem).toHaveText(note)
    });
});