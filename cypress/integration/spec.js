/// <reference types="cypress" />

import {LoginPage} from "../page-objects/login-page";
import {Assertion} from "../page-objects/assertion";

describe('Login into SwagLab, add product into the cart, delete the product, then Log out', () => {
    const loginPage = new LoginPage()
    const assertion = new Assertion()
    beforeEach(() => {
       loginPage.navigate()
    })

    it('should be able to login into SwagLabs app', () => {
       loginPage.loginWithCredentials()
        assertion.isCartVisible()
        assertion.isTitleVisible()
        assertion.verifyTitleText()

    })
})
