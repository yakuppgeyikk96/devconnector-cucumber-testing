import { ChainablePromiseElement } from 'webdriverio'
import DevConnectorPage from './DevconnectorPage'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends DevConnectorPage {
  public get loginPageHeader(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('.text-primary')
  }
  /**
   * define selectors using getter methods
   */
  public get inputEmail(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('input[name="email"]')
  }

  public get inputPassword(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('input[name="password"]')
  }

  public get btnSubmit(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $('input[type="submit"]')
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string): Promise<void> {
    await this.inputEmail.setValue(username)
    await browser.pause(1000)
    await this.inputPassword.setValue(password)
    await browser.pause(1000)
    await this.btnSubmit.click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open(): Promise<string> {
    return super.open('login')
  }
}

export default new LoginPage()
