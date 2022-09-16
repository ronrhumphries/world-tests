import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

var url = ''

Given('a user has the world URL', () => {
  url = "http://localhost"
})

Given('the user navigates to the world URL', () => {
  cy.visit(url)
})

Then('the user sees the page titled World', () => {
  cy.title().should('eq', 'World')
})