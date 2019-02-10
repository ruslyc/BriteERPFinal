@smoke @BRIT-284
Feature: As a user I should have Customer Invoices page to see and manage all Invoices

  Background:
    Given the user is on the login page and user enters valid credentials
    And user should be on Home page clicks Invoicing link on top left of the page
    Then user should land on Invoicing page

  Scenario: Testing 'Create' button under 'Customer Invoices' link with mandatory name field
    When User clicks Invoicing link on top left of the page
    And User clicks Create button on top left of the page
    Then User enter "<name>" on mandatory Name field
    And User clicks Save button on top left of the page
    And User clicks Save button again
    Then User verifying that "<name>" displays in the table on Customer Invoices page


