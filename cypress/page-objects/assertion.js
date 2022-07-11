import {LoginPage} from "./login-page";

const loginPage = new LoginPage()

export class Assertion {
    isCartVisible() {
        loginPage.getLoginPageTitle().should('be.visible')
    }

    isTitleVisible() {
        loginPage.getShoppingCart().should('be.visible')
    }

    verifyTitleText() {
        loginPage.getTitleText().should('have.text', "Products")
    }
}