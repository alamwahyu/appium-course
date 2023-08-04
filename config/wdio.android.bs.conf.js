const {config} = require('./wdio.shared.conf')
require('dotenv').config()

// ============
// BROWSER STACK CREDENTIALS
// ===========

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

// ============
// Specs
// ============

config.specs = [
    //'../test/specs/android/add-note.spec.js'
];

// ============
// Capabilities
// ============

config.capabilities = [
        {
        "os_version" : "10.0",
        "device" : "Google Pixel 4",
        "app" : "bs://ffc299c19df1d03e0fa16501464925a53aa49cf7",
        "browserName" : "chrome",
        "browserstack.user" : "alamwahyu_pdBLKS",
        "browserstack.key" : "Ger9e71Ezz1CkuiyqR5e",
        "autoGrantPermissions": true
        }
]

    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'],

exports.config = config;
