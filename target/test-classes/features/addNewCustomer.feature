@newCustomer @smoke
Feature: Adding new Customer in the Sales.Invoicing module


  Scenario: Testing Create New Customer/Sales on Invoicing module
    When User clicks on Master Data button
    And User clicks on Customers button
    And User clicks on Create button
    And User inputs a random name in the name field
    And User clicks on Save button
    Then User should see the new customer created under used name.
