const Page = require('../pageobjects/page');
const Username = require('../pageobjects/username');
const Password = require('../pageobjects/password');
const Login = require('../pageobjects/login');

describe('Fill in the “Username” and “Password” input fields and click the “LogIn” button', () => {
    it('should fill in the input fields "Username" and "Password"', async () => {
        await Page.open();
        await Username.enterInputUsername();
        await browser.pause(2000);
        await Password.enterInputPassword();
        await browser.pause(2000);
    });

    it('should log in to account', async () => {
        await Login.loginToAccount();
        await browser.pause(4000);
    });

});

// npx wdio run ./wdio.conf.js --spec index.js