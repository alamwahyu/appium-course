describe('Android Native Feature Tests', () => {
    it('Access an Activity Directly', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //pause 3 s
        await driver.pause(3000)

        //assert
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        //click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        //accept alert
        // await driver.acceptAlert();
        //dismiss alert
        // await driver.dismissAlert();
        //get Text alert
        const getTextAlert = await driver.getAlertText();
        console.log("ALERT TEXT IS ="+getTextAlert);
        //click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();
        //assert
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the End (not stable if element gets moved)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        //assert 
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );
        //horizontal scrolling 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    });

    it.only('Working with a date picker', async () => {
        //access the date picker
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1")

        //get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        //click on change the date button
        await $('~change the date').click();

        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //select the 10th date
        await $('//*[@text="10"]').click();
        
        //click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        //verify the update date
        await expect(await date.getText()).not.toEqual(currentDate);
    });
});