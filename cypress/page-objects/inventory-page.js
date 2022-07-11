import {randomIndex} from "../support/randomIndex";

export class InventoryPage {
    getListOfBtns(index) {
        const listOfBtns = [
            {btn: cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')},
            {btn: cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')},
            {btn: cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')},
            {btn: cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')},
            {btn: cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')},
            {btn: cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')}
        ];
        return (listOfBtns[index].btn)
    }
    getInventoryPageUrl() {
        return cy.url();
    }
    getTitleText(){
        return cy.get('[class = "title"]')
    }
    addItemProductIntoCart(){
        this.getListOfBtns(randomIndex).click()
    }
    getShoppingCart() {
        return cy.get('[class = "shopping_cart_link"]')
    }
    clickOnCart(){
        this.getShoppingCart().click()
    }


}
