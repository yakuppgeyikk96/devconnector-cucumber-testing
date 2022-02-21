/**
 * main page object containing all methods, selectors and functionality
 */
export default class DevConnectorPage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page
   */
  public open(path: string): Promise<string> {
    return browser.url(`http://localhost:3000/${path}`)
  }
}
