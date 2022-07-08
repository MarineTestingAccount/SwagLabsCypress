/// <reference types="cypress" />

describe('Login into SwagLab, add product into the cart, delete the product, then Log out', () => {
  beforeEach(() => {
   cy.visit('https://www.saucedemo.com/')
  })

  it('displays two todo items by default', () => {
    cy.get('[id = "user-name"]').type('standard_user')
    cy.get('[id = "password"]').type('secret_sauce')
    cy.get('[id = "login-button"]').click()
    cy.get('[class = "shopping_cart_link"]').should('be.visible')
    cy.get('[class = "title"]').should('be.visible')
    cy.get('[class = "title"]').should('have.text',"Products")

  })
})
