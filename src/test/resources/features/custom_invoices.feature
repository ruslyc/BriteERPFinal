 @BRIT-284
Feature: As a user I should have Customer Invoices page to see and manage all Invoices

#  Background:
#    Given the user is on the login page and user enters valid credentials
#    And user should be on Home page clicks Invoicing link on top left of the page
#    Then user should land on Invoicing page

#    @BRIT-287
  Scenario Outline: Testing 'Create' button under 'Customer Invoices' link with mandatory name field
    When User clicks Invoicing link on top left of the page
    And User clicks Create button on top left of the page
    Then User enter "<name>" on mandatory Name field
    And User clicks Save button on top left of the page
    And User clicks Save button again
    Then User verifying that "<name>" displays in the table on Customer Invoices page
    Examples:
      | name |
      | John |

#    @BRIT-286
    Scenario: Negative testing 'Customer Invoices' link with empty fields
      When User clicks Invoicing link on top left of the page
      And User clicks Create button on top left of the page
      Then User clicks Save button on top left of the page
      Then User should able to see 'The following fields are invalid: Partner, Account' message on the right of the page invalid: Partner, Account' message on the right of the page
      And User clicks Validate button
      And User clicks Discard button
      Then User Verifies that empty row does not displays in the table on Customer invoices page

      @BRIT-289
      Scenario Outline: Testing 'Cancel' option under Action / Delete
        When User clicks Invoicing link on top left of the page
        And User clicks "name" from the table
        Then User should be able to see 'Invoice page'
        And User clicks 'Action' on top of the page
        And User clicks 'Delete' button
        Then User should able to see Confirmation message with 2 option:'Ok' and 'Cancel'
        And User clicks 'Cancel' button
        And User clicks Invoicing link
        Then User verifying that "<name>" displays in the table on Customer Invoices page
        Examples:
          | name |
          | John |

