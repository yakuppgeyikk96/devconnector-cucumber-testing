
Feature: Login Fail
  Scenario Outline: Login with invalid credentials

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see an error

    Examples:
      | email           | password |
      | sarah@gmail.com | sarah321 |