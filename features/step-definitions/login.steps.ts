import { Given, When, Then, After } from '@wdio/cucumber-framework'

import LoginPage from '../pageobjects/login.page'

const pages = {
  login: LoginPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open()
})

Then(/^I should see a header saying (.*)$/, async (message) => {
  const { login } = pages
  const headerValue = await login.loginPageHeader.getText()
  await expect(headerValue).toBe(message)
})

When(/^I login with (.*) and (.*)$/, async (email, password) => {
  await LoginPage.login(email, password)
})

Then(/^I should be on the (.*)$/, async (dashboardUrl) => {
  await browser.pause(2000)
  const currentUrl = await browser.getUrl()
  expect(currentUrl).toBe(dashboardUrl)
})

Then(/^I should see a token saved into localstorage$/, async () => {
  const token = await browser.execute(() => {
    return localStorage.getItem('token')
  })
  expect(token).toBeTruthy()
})
