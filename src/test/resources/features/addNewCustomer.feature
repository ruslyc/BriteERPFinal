@newCustomer
Feature: Adding new Customer on the Invoicing module.

  Background:
    Given the user is on the login page and user enters valid credentials
    And user should be on Home page clicks Invoicing link on top left of the page
    Then user should land on Invoicing page

  Scenario: Testing Create New Customer/Sales on Invoicing module
    When User clicks on Master Data button
    And User clicks on Customers button
    And User clicks on Create button
    And User inputs a random name in the name field
    And User clicks on Save button
    Then User should see the new customer created under used name.
