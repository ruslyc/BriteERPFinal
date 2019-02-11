$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/custom_invoices.feature");
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
});