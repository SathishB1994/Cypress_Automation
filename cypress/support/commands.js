// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('add_computer', (computer_name, introduced, discontinued) => {
    cy.get('#add').click(),
    cy.get('#name').type(computer_name),
    cy.get('#introduced').type(introduced);
    cy.get('#discontinued').type(discontinued);
    cy.get('#company').select('Apple Inc.').should('have.value', '1')
    cy.contains('Create this computer').click()
})