var elements = require('./elements')

class ComputerPage {

    clickOnAddButton() {
        return cy.get(elements.computerpage.add_button).click()
    }

    typeInComputerNameField(value) {
        return cy.get(elements.computerpage.computer_name_field).type(value)
    }

    typeInIntroducedField(value) {
        return cy.get(elements.computerpage.introduced_field).type(value)
    }

    typeInDiscontinuedField(value) {
        return cy.get(elements.computerpage.discontinued_field).type(value)
    }

    selectCompany() {
        return cy.get(elements.computerpage.company_dropdown).click()
    }

    clickOnCreateButton() {
        return cy.get(elements.computerpage.create_button).click()
    }

    verifySuccessCreate() {
        return 
    }

    clickOnSearchField(value) {
        return cy.get(elements.computerpage.search_field).type(value)
    }

    clickOnSearchButton() {
        return cy.get(elements.computerpage.filter_button).click()
    }

    verifySuccessSearch() {
        return cy.contains('Atlas Computer').should('be.visible');
    }

    verifySuccessSearch1() {
        return cy.contains('Atanasoff-Berry Computer').should('be.visible');
    }

    clickOnComputerLink() {
        return cy.get(elements.computerpage.computer_name_link).click()
    }

    updateInComputerNameField() {
        return cy.get(elements.computerpage.computer_name_field).type()
    }

    clickOnSaveButton() {
        return cy.contains('Save this computer').click()
    }

    verifySuccessUpdate() {
        return cy.contains('has been updated').should('be.visible');
    }

    clickOnDeleteButton() {
        return cy.get(elements.computerpage.delete_button).click({ force: true })
    }

    verifySuccessDelete() {
        return cy.contains('has been deleted').should('be.visible');
    }

    
}

export default ComputerPage