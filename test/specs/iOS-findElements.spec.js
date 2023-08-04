describe('iOS Elements Test', () => {
    it('Find element by accessibility id', async () => {
        //find element by accessibility id
        await $('~Alert Views').click();
        await $('~Simple').click();

        //assertion
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('Find element by class name/tagname', async () => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textEls = await $$('XCUIElementTypeStaticText')

        for(const element of textEls){
            console.log(await element.getText());
        }
    });

    it('Find elements by Xpath', async () => {
       await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
       await $('//XCUIElementTypeStaticText[@lebel="Simple"]').click();

       await $('//*[@name="Alert Views"]').click();
       await $('//*[@label="Simple"]').click();
       await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it('Find element by class chain', async () => {
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()),toContain("A Short Title Is Best");
    });

    it('Find element by predicate string', async () => {
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()),toContain("A Short Title Is Best");
    });

   it('Exercise: Enter text in the search field', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("I love this course!");
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr('value');

        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value")
   });
});