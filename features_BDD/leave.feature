Feature: OrangeHRM Leave module

  Scenario: View the leave list
    Given I have signed into OrangeHRM
    When I open the "Leave" module
    Then the "Leave List" page is displayed
