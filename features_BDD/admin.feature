Feature: OrangeHRM Admin module

  Scenario: View system users
    Given I have signed into OrangeHRM
    When I open the "Admin" module
    Then the "System Users" page is displayed
