$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/addNewCustomer.feature");
formatter.feature({
  "name": "Adding new Customer on the Invoicing module.",
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan class\u003d\"oe_topbar_name\"\u003e...\u003c/span\u003e is not clickable at point (1358, 16). Other element would receive the click: \u003cdiv class\u003d\"blockUI blockOverlay\" style\u003d\"z-index: 1100; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.0429847; cursor: default; position: fixed;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Ermeks-MacBook-Pro.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:81ed%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: /var/folders/x8/5nfys4z17sx...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59130}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 11ceb05d06cf2c7667d21b549bf46e50\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps.Hooks.tearDown(Hooks.java:55)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
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
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/web/login\u0027]/b\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Ermeks-MacBook-Pro.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:81ed%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: /var/folders/x8/5nfys4z17sx...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59130}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 11ceb05d06cf2c7667d21b549bf46e50\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/web/login\u0027]/b}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps.Hooks.setUp(Hooks.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks Invoicing link on top left of the page",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Invoicing_link_on_top_left_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Create button on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Create_button_on_top_left_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter \"John\" on mandatory Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_enter_on_mandatory_Name_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Save button on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Save_button_on_top_left_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Save button again",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_clicks_Save_button_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifying that \"John\" displays in the table on Customer Invoices page",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_verifying_that_displays_in_the_table_on_Customer_Invoices_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027oe_topbar_name\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Ermeks-MacBook-Pro.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:81ed%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: /var/folders/x8/5nfys4z17sx...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59130}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 11ceb05d06cf2c7667d21b549bf46e50\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027oe_topbar_name\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps.Hooks.tearDown(Hooks.java:55)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
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