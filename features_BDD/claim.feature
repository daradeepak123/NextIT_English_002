Feature: OrangeHRM Claim module

  Scenario: View employee claims
    Given I have signed into OrangeHRM
    When I open the "Claim" module
    Then the "Employee Claims" page is displayed
