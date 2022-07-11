import {Constants} from "../support/constants";

const credentials = new Constants()

export class LoginPage {

    navigate() {
        cy.visit('')
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

    getLoginPageTitle() {
        return cy.get('[class = "title"]')
    }

    getShoppingCart() {
        return cy.get('[class = "shopping_cart_link"]')
    }

    getTitleText() {
        return cy.get('[class = "title"]')
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