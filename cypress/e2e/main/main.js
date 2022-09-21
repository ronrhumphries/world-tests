import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

var url = ''

Given('a user has the world URL', () => {
  url = "http://localhost:3000"
})

Given('the user navigates to the world URL', () => {
  cy.visit(url)
})

Then('the user sees the "command>" prompt', () => {
  cy.get('#prompt').should('contain.text', 'command>')
})