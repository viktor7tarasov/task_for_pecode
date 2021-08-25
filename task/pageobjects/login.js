class Login {

    // Login to account
    get loginButton() {
        return $('//*[@id="all"]/div/form/div[3]/input');
    }

    async loginToAccount() {
        await (await this.loginButton).click();
    }
}

module.exports = new Login();