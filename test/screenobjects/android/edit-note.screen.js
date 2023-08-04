const addNoteScreen = require("./add-note.screen");

class editNoteScreen {
    get firstNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get moreIcon(){
        return $('~More');
    }

    get deleteIcon(){
        return $('//*[@text="Delete"]');
    }

    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanItem(){
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial(){
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody){
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        //add a note title
        await addNoteScreen.noteHeading.addValue(noteHeading);

        //add a body note
        await addNoteScreen.noteBody.addValue(noteBody);

        //save the changes
        await addNoteScreen.saveNote()

        //assert
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
    }
}

module.exports = new editNoteScreen();