/// <reference types="cypress" />

import {LoginPage} from "../page-objects/login-page";
import {LoginPageAssertion} from "./assertions/loginPageAssertion";
import {InventoryPage} from "../page-objects/inventory-page";
import {InventoryPageAssertion} from "./assertions/inventoryPageAssertion";
import {CartPage} from "../page-objects/cart-page";
import {CartPageAssertion} from "./assertions/cartPageAssertion";

describe('Login into SwagLab, add product into the cart, delete the product, then Log out', () => {
    const loginPage = new LoginPage()
    const loginPageAssertion = new LoginPageAssertion()
    const inventoryPage = new InventoryPage()
    const inventoryPageAssertion = new InventoryPageAssertion()
    const cartPage = new CartPage()
    const cartPageAssertion = new CartPageAssertion()

    beforeEach(() => {
       loginPage.navigate()
    })

    it('should be able to login into SwagLabs app', () => {
        loginPageAssertion.verifyLoginPageUrl()
        loginPage.loginWithCredentials()

        inventoryPageAssertion.verifyInventoryPageUrl()
        inventoryPageAssertion.verifyTitleText()
        inventoryPage.addItemProductIntoCart()
        inventoryPage.clickOnCart()

        cartPageAssertion.verifyCartPageUrl()
        cartPageAssertion.verifyTitleText()
        cartPageAssertion.isInventoryItemVisible()
        cartPage.getInventoryItem()

        cartPage.clickOnRemoveBtn()
        cartPageAssertion.isRemovedInventoryItem()




    })
})
