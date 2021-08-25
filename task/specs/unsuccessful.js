const Page = require('../pageobjects/page');
const Username = require('../pageobjects/username');
const Password = require('../pageobjects/password');
const Login = require('../pageobjects/login');

describe('Test-case for Unsuccessful login', () => {
    it('should fill incorrect data in the input fields "Username" and "Password"', async () => {
        await Page.open();
        await Username.enterIncorrectInputUsername();
        await browser.pause(2000);
        await Password.enterIncorrectInputPassword();
        await browser.pause(2000);
    });

    it('should log in to account', async () => {
        await Login.loginToAccount();
        await browser.pause(4000);
    });

});

// npx wdio run ./wdio.conf.js --spec unsuccessful.js