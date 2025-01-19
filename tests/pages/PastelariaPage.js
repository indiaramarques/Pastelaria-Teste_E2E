const {expect} = require("@playwright/test")
const {PastelariaLocators} = require("../locators/PastelariaLocators.js")

class PastelariaPage {

    async AcessaPastelaria () {
        await page.goto('www.pastelaria.com.br')
    }
}
module.exports = {PastelariaPage: PastelariaPage}