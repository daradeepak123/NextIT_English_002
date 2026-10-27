Feature: OrangeHRM Maintenance module

  Scenario: View the administrator access prompt
    Given I have signed into OrangeHRM
    When I open the "Maintenance" module
    Then the "Administrator Access" page is displayed
    And I cancel the administrator access prompt
