Feature: Computer features
  Scenario: Verify success - adding new computer
    When I submit data new computer
    Then I should get success on adding new computer

  Scenario: Verify Error - adding new computer 
    When I submit data new computer with invalid dates
    Then I should get unsuccessful on adding computer 

  Scenario: Verify success on searching computer by entering full name
    When I search data computer "Atlas Computer"
    Then I should get success searching computer 
   
  Scenario: Verify success on searching computer by entering only 2 letters
    When I search data computer "At"
    Then I should get success searching computer by entering two letters

  Scenario: Verify success on updating computer
    When I update data computer "Atlas Computer"
    Then I should get success on updating computer

  Scenario: Verify success on deleting computer
    When I delete data computer "Atlas Computer"
    Then I should get success on deleting computer 