export class Logout{
    getMenuBtn() {
        return cy.get('[id="react-burger-menu-btn"]')
    }
    clickOnMenuBtn(){
        this.getMenuBtn().click()
    }
    getLogoutBtn(){
        return cy.get('[id = "logout_sidebar_link"]')
    }
    clickOnLogoutBtn(){
        this.getLogoutBtn().click()
    }
}