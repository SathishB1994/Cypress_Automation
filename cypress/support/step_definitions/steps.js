import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import ComputerPage from '../../e2e/pages/computer page/ComputerPage'

const computerPage = new ComputerPage()

beforeEach(() => {
  cy.visit('https://computer-database.gatling.io/computers/', { timeout: 10000 });
});

When('I submit data new computer', () => {
    cy.add_computer("Computer New", "2018-01-01", "2025-01-01")
})

Then('I should get success on adding new computer', () => {
    computerPage.verifySuccessCreate()
})

When('I submit data new computer with invalid dates', () => {
  cy.add_computer("Computer New", "01-01-2025", "2035-01-01",{ timeout: 55000});
})

Then('I should get unsuccessful on adding computer', () => {
  computerPage.verifySuccessCreate()
})

When('I search data computer {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
})

Then('I should get success searching computer', () => {
  computerPage.verifySuccessSearch()
}) 

When('I search data computer "At" {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
})

Then('I should get success searching computer by entering two letters', () => {
  computerPage.verifySuccessSearch1()
}) 

When('I update data computer {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
  computerPage.clickOnComputerLink()
  cy.fixture("computer").then(computer => {
    const computer_name_update= computer.computer_name_update
  cy.get('#name').type(computer_name_update);
  computerPage.clickOnSaveButton()
  })
  
})

Then('I should get success on updating computer', () => {
  computerPage.verifySuccessUpdate()
})

When('I delete data computer {string}', (value) => {
  computerPage.clickOnSearchField(value)
  computerPage.clickOnSearchButton()
  computerPage.clickOnComputerLink()
  computerPage.clickOnDeleteButton()
})

Then('I should get success on deleting computer', () => {
  computerPage.verifySuccessDelete()
})
