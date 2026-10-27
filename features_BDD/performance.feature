Feature: OrangeHRM Performance module

  Scenario: View employee reviews
    Given I have signed into OrangeHRM
    When I open the "Performance" module
    Then the "Employee Reviews" page is displayed
