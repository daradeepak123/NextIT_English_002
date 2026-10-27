Feature: OrangeHRM Recruitment module

  Scenario: View candidates
    Given I have signed into OrangeHRM
    When I open the "Recruitment" module
    Then the "Candidates" page is displayed
