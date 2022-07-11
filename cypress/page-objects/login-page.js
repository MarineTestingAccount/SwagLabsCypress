import {Constants} from "../support/constants";

const credentials = new Constants()

export class LoginPage {

    navigate() {
        cy.visit('')
    }
    getLoginPageUrl() {
        return cy.url();
    }

    getUserName() {
        return cy.get('[id = "user-name"]')
    }

    getUserPassword() {
        return cy.get('[id = "password"]')
    }

    getLoginBtn() {
        return cy.get('[id = "login-button"]')
    }

    setUserName() {
        this.getUserName().type(credentials.userName1)
    }

    setPassword() {
        this.getUserPassword().type(credentials.password)
    }

    clickOnLoginBtn() {
        this.getLoginBtn().click()
    }

    loginWithCredentials() {
        this.setUserName()
        this.setPassword()
        this.clickOnLoginBtn()
    }


}