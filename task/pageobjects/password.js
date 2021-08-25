const formData = require("../credentials/data.json");

class Password {

    // Enter password
    get inputPassword() {
        return $('//*[@id="all"]/div/form/div[2]/input');
    }

    async enterInputPassword() {
        await (await this.inputPassword).click();
        //random password from data.json
        var randomPassword = await formData.password[(Math.floor(
            Math.random() * formData.password.length))];

        //add the random password to the input field
        await (await this.inputPassword).addValue(randomPassword);
    }

    // Function for incorrect enter in the Password input field
    async enterIncorrectInputPassword() {
        await (await this.inputPassword).click();
        //incorrect password from data.json
        var incorrectPassword = await formData.password_incorrect;

        //add the incorrect password to the input field
        await (await this.inputPassword).addValue(incorrectPassword);
    }

}

module.exports = new Password();