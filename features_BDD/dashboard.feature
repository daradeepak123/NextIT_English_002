Feature: OrangeHRM Dashboard

  Scenario: View dashboard widgets
    Given I have signed into OrangeHRM
    When I open the "Dashboard" module
    Then the "Dashboard" page is displayed
