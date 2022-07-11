import {LoginPage} from "../../page-objects/login-page";

const loginPage = new LoginPage()

export class LoginPageAssertion {
    verifyLoginPageUrl() {
        loginPage.getLoginPageUrl().should('include', '')
    }
}
