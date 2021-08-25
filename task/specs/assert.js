const Page = require('../pageobjects/page');
const Username = require('../pageobjects/username');
const Password = require('../pageobjects/password');
const Login = require('../pageobjects/login');

const assertChai = require('chai').assert;

describe('a statement that all elements are present on the page', () => {

    //Username Input Field
    it('should be displayed a username entry field', async () => {
        await Page.open();
        var expectedUsernameInputField = await Username.inputUsername.isDisplayed();
        assertChai.isFalse(expectedUsernameInputField, 
            'the Username Input Field element is displayed'); //if isTrue, should be TRUE
    });

    //Password Input Field
    it('should be displayed a password entry field', async () => {
        var expectedPasswordInputField = await Password.inputPassword.isDisplayed();
        assertChai.isFalse(expectedPasswordInputField, 
            'the Password Input Field element is displayed'); //if isTrue, should be TRUE
    });

    //Login Button
    it('should be displayed a login button', async () => {
        var expectedLoginButton = await Login.loginButton.isDisplayed();
        assertChai.isFalse(expectedLoginButton, 
            'the Login button element is displayed'); //if isTrue, should be TRUE
    });

});

// npx wdio run ./wdio.conf.js --spec assert.js