Feature: OrangeHRM My Info module

  Scenario: View personal details
    Given I have signed into OrangeHRM
    When I open the "My Info" module
    Then the "Personal Details" page is displayed
