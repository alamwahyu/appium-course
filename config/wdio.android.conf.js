const {config} = require('./wdio.shared.conf')
const path = require('path')

// ====================
// Runner Configuration
// ====================

config.port = 4723,

// ============
// Specs
// ============

config.specs = [
    '../test/specs/android-native.spec.js'
];

// ============
// Capabilities
// ============

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Pixel 4',
        'appium:automationName': 'UIAutomator2',
        // 'appium:app': path.join(process.cwd(),'app/android/ApiDemos-debug.apk'),
        'appium:app': path.join(process.cwd(),'app/android/ColorNote+Notepad.apk'),
        // 'appium:app': path.join(process.cwd(),'app/android/bni_dev_260723_2.8.7.apk'),
        //jika app minta izin permissions
        "appium:autoGrantPermissions": true
    }
]

    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['appium'],

exports.config = config;