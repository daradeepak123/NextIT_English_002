Feature: OrangeHRM Time module

  Scenario: View employee timesheets
    Given I have signed into OrangeHRM
    When I open the "Time" module
    Then the "Select Employee" page is displayed
