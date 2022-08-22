const { expect, assert } = require('chai')

class LoginPage {
  async navigateToLoginScreen() {
    await page.goto('https://www.saucedemo.com/')
    const bar = await page.title()
    expect(bar).to.equal('Swag Labs')
    assert.equal(bar, 'Swag Labs', 'bar equal `Swag Labs`')
  }

  async submitLoginForm() {
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async submitLoginWithParameters(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector('.inventory_list')
  }

  async pause() {
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginPage }
