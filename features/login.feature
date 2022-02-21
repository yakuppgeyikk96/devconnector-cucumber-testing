
Feature: Login Success
  Scenario Outline: Login with valid credentials

    Given I am on the login page
    Then I should see a header saying <headerText>
    When I login with <email> and <password>
    Then I should be on the <dashboardUrl>
    Then I should see a token saved into localstorage

    Examples:
      | headerText | email           | password | dashboardUrl                    |
      | Sign In    | sarah@gmail.com | sarah123 | http://localhost:3000/dashboard |
