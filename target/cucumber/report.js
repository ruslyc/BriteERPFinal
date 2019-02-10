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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page and user enters valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "Background_steps.the_user_is_on_the_login_page_and_user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on Home page clicks Invoicing link on top left of the page",
  "keyword": "And "
});
formatter.match({
  "location": "Background_steps.user_should_be_on_Home_page_clicks_Invoicing_link_on_top_left_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on Invoicing page",
  "keyword": "Then "
});
formatter.match({
  "location": "Background_steps.user_should_land_on_Invoicing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing \u0027Create\u0027 button under \u0027Customer Invoices\u0027 link with mandatory name field",
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
  "name": "User enter \"\u003cname\u003e\" on mandatory Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerInvoices_steps.user_enter_on_mandatory_Name_field(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027o_field_input_802\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Ermeks-MacBook-Pro.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:81ed%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: /var/folders/x8/5nfys4z17sx...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56090}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 96692cd9ae481c0f5b69d2297590b3b0\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027o_field_input_802\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat steps.CustomerInvoices_steps.user_enter_on_mandatory_Name_field(CustomerInvoices_steps.java:31)\n\tat ✽.User enter \"\u003cname\u003e\" on mandatory Name field(src/test/resources/features/custom_invoices.feature:12)\n",
  "status": "failed"
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
  "name": "User verifying that \"\u003cname\u003e\" displays in the table on Customer Invoices page",
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
  "status": "passed"
});
});