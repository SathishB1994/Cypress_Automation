"# Cypress_Automation" 
Scenarios considered: 

Adding a new computer by entering all the fields such as computer name, Introduced date, Discontinued date and company name.

Verify the Error on adding a new computer by giving an invalid date format (‘MM-dd-yyyy’).
	
Verify searching the computer by entering the full name “Atlas Computer”.
   
Verify searching the computer by entering two letters “At”.

Verify updating the computer “Atlas Computer”.

Verify deleting the computer “Atlas Computer”.



Automation tool used: Cypress

Syntax: Tests are implemented in Gherkin Syntax

Design pattern used: Page object model (POM) where classes are represented as pages. POM reduces code duplication and makes code more reusable.

Steps to execute the test: 

 Run the below command to execute the test

            npx cypress open 

 A Cypress window opens to select the preferred browser to execute the test on. Select the browser and execute.

Click on the computer.feature.


Run the below command to execute the tests without opening the browser.

            npx cypress run

