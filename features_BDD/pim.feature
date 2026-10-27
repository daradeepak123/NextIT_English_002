Feature: OrangeHRM PIM module

  Scenario: View employee information
    Given I have signed into OrangeHRM
    When I open the "PIM" module
    Then the "Employee Information" page is displayed
