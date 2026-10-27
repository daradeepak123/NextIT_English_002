Feature: OrangeHRM Directory module

  Scenario: View employee directory
    Given I have signed into OrangeHRM
    When I open the "Directory" module
    Then the "Directory" page is displayed
