const formData = require("../credentials/data.json");

class Username {

    // Enter username
    get inputUsername() {
        return $('//*[@id="all"]/div/form/div[1]/input');
    }

    async enterInputUsername() {
        await (await this.inputUsername).click();
        //random username from data.json
        var randomUsername = await formData.username[(Math.floor(
            Math.random() * formData.username.length))];

        //add the random username to the input field
        await (await this.inputUsername).addValue(randomUsername);
    }

    // Function for incorrect enter in the Username input field
    async enterIncorrectInputUsername() {
        await (await this.inputUsername).click();
        //incorrect username from data.json
        var incorrectUsername = await formData.username_incorrect;

        //add the incorrect username to the input field
        await (await this.inputUsername).addValue(incorrectUsername);
    }

}

module.exports = new Username();