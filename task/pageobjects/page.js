class Page {
    open () {
        return browser.url('https://www.pecodesoftware.com/qa-portal/greet.php');
    }
}

module.exports = new Page();