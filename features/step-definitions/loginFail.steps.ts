import { Given, When, Then } from '@wdio/cucumber-framework'

import LoginPage from '../pageobjects/login.page'

const pages = {
  login: LoginPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open()
})

When(/^I login with (.+) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password)
})

Then(/^I should see an error$/, async () => {
  await browser.pause(2000)
  const element = await $('.alert-danger')
  const errorText = await element.getText()
  expect(errorText).toBe('Invalid credentials')
})
