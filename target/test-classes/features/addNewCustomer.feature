<<<<<<< HEAD
<<<<<<< HEAD
@smoke
Feature: Adding new Customer on the Invoicing module.

=======
@newCustomer @smoke
Feature: Adding new Customer in the Sales.Invoicing module

=======
@newCustomer @smoke
Feature: Adding new Customer in the Sales.Invoicing module

>>>>>>> ceb359cac650c9cb22c7ee304fe9eebbacd84c61

>>>>>>> c7d84cef5b86fbaa0f13991914195c1428fe650a
  Scenario: Testing Create New Customer/Sales on Invoicing module
    When User clicks on Master Data button
    And User clicks on Customers button
    And User clicks on Create button
    And User inputs a random name in the name field
    And User clicks on Save button
    Then User should see the new customer created under used name.
