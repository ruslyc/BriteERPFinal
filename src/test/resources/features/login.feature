
  Feature: Login feature

    Scenario: login with valid credentials
      Given the user is on the login page and user enters valid credentials
      When user should be on Home page clicks Invoicing link on top left of the page
      Then user should land on Invoicing page
