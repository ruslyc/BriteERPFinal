@smoke
Feature: Update Customer Contact info

  Scenario: Update Customer Contact info
    When User clicks on Master Data button
    And User clicks on Customers button
    And User clicks on random customer
    And User clicks Edit button
    And User clicks Create button
    And User inputs a random name in the name for the contact
    And User clicks Save and Close button
    Then User should see the new contact detail.