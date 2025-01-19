const {Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber')
const {chromium} = require('@playwright/test')

BeforeAll(async() => {
    global.browser = await chromium.launch({
        timeout: 30*1000,
        headless: true
    })
})

Before(async(Cenário)=>{
    global.context = await global.browser.newContext({})
    global.page = await global.context.newPage()
})

After(async()=>{
    await global.context.close()
})

AfterAll(async()=>{
    await global.browser.close()
})

