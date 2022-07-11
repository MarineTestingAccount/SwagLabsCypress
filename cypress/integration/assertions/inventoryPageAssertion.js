const {InventoryPage} = require("../../page-objects/inventory-page");
const inventoryPage = new InventoryPage()

export class InventoryPageAssertion {
    verifyInventoryPageUrl(){
        inventoryPage.getInventoryPageUrl().should('include', '/inventory')
    }
    verifyTitleText() {
        inventoryPage.getTitleText().should('have.text', "Products")
    }

    isCartVisible() {
        cartPage.getShoppingCart().should('be.visible')
    }

}