import {CartPage} from "../../page-objects/cart-page";

const cartPage = new CartPage()

export class CartPageAssertion {
    verifyCartPageUrl(){
        cartPage.getCartPageUrl().should('include', '/cart')
    }
    verifyTitleText() {
        cartPage.getTitleText().should('have.text', "Your Cart")
    }

    isInventoryItemVisible(){
        cartPage.getInventoryItem().should('exist')
    }
    isRemovedInventoryItem(){
        cartPage.getInventoryItem().should('not.exist')
    }

}