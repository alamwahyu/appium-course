describe('Delete Note', () => {
    it('Skip Tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });
    it('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //add a note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List");

        //add a body note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");

        //save the changes
        await driver.back();
        await driver.back();

        //assert
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");
    });
    it('Delete a note & check the note in trash can', async () => {
        await driver.back();
        
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on more icon
        await $('~More').click();

        //click on delete item
        await $('//*[@text="Delete"]').click();

        //assert
        await driver.acceptAlert();

        //click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click on trash can item
        await $('//*[@text="Trash Can"]').click();

        //assert
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');

        await expect(trashCanItem).toHaveText(note)
    });
});