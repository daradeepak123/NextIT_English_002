Feature: OrangeHRM login

  Scenario: Sign in with the demo administrator account
    Given I open the OrangeHRM login page
    When I sign in with the demo credentials
    Then I am logged into OrangeHRM
