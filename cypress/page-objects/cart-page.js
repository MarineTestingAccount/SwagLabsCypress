export class CartPage{
    getCartPageUrl() {
        return cy.url();
    }
    getTitleText(){
        return cy.get('[class = "title"]')
    }
    getInventoryItem() {
        return cy.get('.cart_item')
    }
    getCartRemoveBtn(){
        return cy.get('[class = "btn btn_secondary btn_small cart_button"]')
    }
    clickOnRemoveBtn(){
        this.getCartRemoveBtn().click()
    }


}