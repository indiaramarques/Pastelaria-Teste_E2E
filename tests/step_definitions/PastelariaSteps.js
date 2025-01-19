const { Given, When, setDefaultTimeout } = require('@cucumber/cucumber')
const {expec} = require('@playwright/test')
const {PastelariaPage} = require('../pages/PastelariaPage')
const {PastelariaLocators} = require('../locators/PastelariaLocators')
const PastelariaPage = require('../pages/PastelariaPage')

const PastelariaPage = new PastelariaPage()

    Given('que acessei a página', async function (){
        await PastelariaPage.AcessaPastelaria()
    })
