import { test, expect } from '../fixtures/baseFixture'

test('login test', async ({ loginPage }) => {

  await loginPage.navigate()
  await loginPage.login('user','pass')

})

//No need to create new LoginPage(page) every time.//