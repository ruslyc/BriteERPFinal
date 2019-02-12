$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addNewCustomer.feature");
formatter.feature({
  "name": "Adding new Customer in the Sales.Invoicing module",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@newCustomer"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Testing Create New Customer/Sales on Invoicing module",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@newCustomer"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Master Data button",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Master_Data_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Customers button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Customers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs a random name in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_inputs_a_random_name_in_the_name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the new customer created under used name.",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_should_see_the_new_customer_created_under_used_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/custom_invoices.feature");
formatter.feature({
  "name": "As a user I should have Customer Invoices page to see and manage all Invoices",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BRIT-284"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing \u0027Create\u0027 button under \u0027Customer Invoices\u0027 link with mandatory name field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks Invoicing link on top left of the page",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks Create button on top left of the page",
  "keyword": "And "
});
formatter.step({
  "name": "User enter \"\u003cname\u003e\" on mandatory Name field",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks Save button on top left of the page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks Save button again",
  "keyword": "And "
});
formatter.step({
  "name": "User verifying that \"\u003cname\u003e\" displays in the table on Customer Invoices page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "John"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing \u0027Create\u0027 button under \u0027Customer Invoices\u0027 link with mandatory name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BRIT-284"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Invoicing link on top left of the page",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Invoicing_link_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Create button on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Create_button_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"John\" on mandatory Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_enter_on_mandatory_Name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Save button on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Save_button_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Save button again",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Save_button_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifying that \"John\" displays in the table on Customer Invoices page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_verifying_that_displays_in_the_table_on_Customer_Invoices_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative testing \u0027Customer Invoices\u0027 link with empty fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BRIT-284"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Invoicing link on top left of the page",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Invoicing_link_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Create button on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Create_button_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Save button on top left of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Save_button_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to see \u0027The following fields are invalid: Partner, Account\u0027 message on the right of the page invalid: Partner, Account\u0027 message on the right of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.userShouldAbleToSeeTheFollowingFieldsAreInvalidPartnerAccountMessageOnTheRightOfThePageInvalidPartnerAccountMessageOnTheRightOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Validate button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksValidateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Discard button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksDiscardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verifies that empty row does not displays in the table on Customer invoices page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.userVerifiesThatEmptyRowDoesNotDisplaysInTheTableOnCustomerInvoicesPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Testing \u0027Cancel\u0027 option under Action / Delete",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BRIT-289"
    }
  ]
});
formatter.step({
  "name": "User clicks Invoicing link on top left of the page",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks \"name\" from the table",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see \u0027Invoice page\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks \u0027Action\u0027 on top of the page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks \u0027Delete\u0027 button",
  "keyword": "And "
});
formatter.step({
  "name": "User should able to see Confirmation message with 2 option:\u0027Ok\u0027 and \u0027Cancel\u0027",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks \u0027Cancel\u0027 button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks Invoicing link",
  "keyword": "And "
});
formatter.step({
  "name": "User verifying that \"\u003cname\u003e\" displays in the table on Customer Invoices page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "John"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing \u0027Cancel\u0027 option under Action / Delete",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@BRIT-284"
    },
    {
      "name": "@BRIT-289"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Invoicing link on top left of the page",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Invoicing_link_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"name\" from the table",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksFromTheTable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see \u0027Invoice page\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.userShouldBeAbleToSeeInvoicePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \u0027Action\u0027 on top of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksActionOnTopOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \u0027Delete\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksDeleteButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to see Confirmation message with 2 option:\u0027Ok\u0027 and \u0027Cancel\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.userShouldAbleToSeeConfirmationMessageWithOptionOkAndCancel(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \u0027Cancel\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Invoicing link",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.userClicksInvoicingLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifying that \"John\" displays in the table on Customer Invoices page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_verifying_that_displays_in_the_table_on_Customer_Invoices_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/updateCustomerContact.feature");
formatter.feature({
  "name": "Update Customer Contact info",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Update Customer Contact info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Master Data button",
  "keyword": "When "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Master_Data_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Customers button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNewCustomer_steps.user_clicks_on_Customers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on random customer",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateCustomerContact_steps.user_clicks_on_random_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateCustomerContact_steps.user_clicks_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Create button",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateCustomerContact_steps.user_clicks_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs a random name in the name for the contact",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateCustomerContact_steps.user_inputs_a_random_name_in_the_name_for_the_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Save and Close button",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateCustomerContact_steps.user_clicks_Save_and_Close_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the new contact detail.",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateCustomerContact_steps.user_should_see_the_new_contact_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});