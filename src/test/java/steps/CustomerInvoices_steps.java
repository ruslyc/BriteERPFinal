package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.CustomerInvoicesPage;
import pages.HomePage;
import utilities.Driver;

public class CustomerInvoices_steps {


//    @Before
//    public void setUp() throws InterruptedException {
//        Driver.getDriver().get(Config.getProperty("url"));
//        hp.login(Config.getProperty("emailUser4"),Config.getProperty("passwordUser4"));
//        Thread.sleep(2000);
//        hp.invoicingModule.click();
//        Wait wait = new WebDriverWait(Driver.getDriver(), 30);
//        wait.until(ExpectedConditions.titleIs("Customer Invoices - Odoo"));
//    }

    CustomerInvoicesPage ci = new CustomerInvoicesPage();
    HomePage hp = new HomePage();

    @When("User clicks Invoicing link on top left of the page")
    public void user_clicks_Invoicing_link_on_top_left_of_the_page() {
        Wait wait = new WebDriverWait(Driver.getDriver(), 20);
        wait.until(ExpectedConditions.titleIs("Customer Invoices - Odoo"));
    }

    @When("User clicks Create button on top left of the page")
    public void user_clicks_Create_button_on_top_left_of_the_page() throws InterruptedException {
        ci.createButton.click();
    }

    @Then("User enter \\\"([^\"]*)\\\" on mandatory Name field")
    public void user_enter_on_mandatory_Name_field(String name) throws InterruptedException {
        Thread.sleep(1000);
        ci.customerField.sendKeys(name);
    }

    @Then("User clicks Save button on top left of the page")
    public void user_clicks_Save_button_on_top_left_of_the_page() throws InterruptedException {
        Thread.sleep(2000);
        ci.safeButton.click();
    }

    @Then("User clicks Save button again")
    public void user_clicks_Save_button_again() throws InterruptedException {
        Thread.sleep(2000);
        ci.createAgain.click();
        Thread.sleep(2000);
        ci.safeButton.click();
    }

    @Then("User verifying that \\\"([^\"]*)\\\" displays in the table on Customer Invoices page")
    public void user_verifying_that_displays_in_the_table_on_Customer_Invoices_page(String name) throws InterruptedException {
        hp.invoicingModule.click();
        Thread.sleep(2000);
        String createACustomer = ci.createACustomer.getText();
        Assert.assertTrue(createACustomer.equals(name));
    }

    @And("^User clicks Validate button$")
    public void userClicksValidateButton() throws Throwable {
        ci.validateButton.click();
    }

    @And("^User clicks Discard button$")
    public void userClicksDiscardButton() throws Throwable {
        Thread.sleep(2000);
        ci.discardButton.click();
    }

    @Then("^User Verifies that empty row does not displays in the table on Customer invoices page$")
    public void userVerifiesThatEmptyRowDoesNotDisplaysInTheTableOnCustomerInvoicesPage() throws Throwable {
        Thread.sleep(3000);
        Assert.assertFalse(ci.createACustomer.getText().isEmpty());
    }


    @Then("^User should able to see 'The following fields are invalid: Partner, Account' message on the right of the page invalid: Partner, Account' message on the right of the page$")
    public void userShouldAbleToSeeTheFollowingFieldsAreInvalidPartnerAccountMessageOnTheRightOfThePageInvalidPartnerAccountMessageOnTheRightOfThePage() throws Throwable {
        String alert = Driver.getDriver().findElement(By.xpath("//div[@class='o_notification_manager']")).getText();
        Thread.sleep(2000);
        Assert.assertTrue(alert.contains("The following fields are invalid:"));
    }

    @And("^User clicks \"([^\"]*)\" from the table$")
    public void userClicksFromTheTable(String name) throws Throwable {
        ci.createACustomer.click();
    }

    @Then("^User should be able to see 'Invoice page'$")
    public void userShouldBeAbleToSeeInvoicePage() throws Throwable {
        Thread.sleep(3000);
        Assert.assertEquals(ci.customerInvoicePage.getText(),"Customer Invoices");
    }

    @And("^User clicks 'Action' on top of the page$")
    public void userClicksActionOnTopOfThePage() throws Throwable {
        Thread.sleep(2000);
        ci.actionButton.click();
    }

    @And("^User clicks 'Delete' button$")
    public void userClicksDeleteButton() throws Throwable {
        ci.deleteButton.click();
    }

    @Then("^User should able to see Confirmation message with (\\d+) option:'Ok' and 'Cancel'$")
    public void userShouldAbleToSeeConfirmationMessageWithOptionOkAndCancel(int arg0) throws Throwable {
        Assert.assertEquals(ci.confirmationPage.getText(),"Confirmation");
    }

    @And("^User clicks 'Cancel' button$")
    public void userClicksCancelButton() throws Throwable {
        Thread.sleep(1000);
        ci.cancelButton.click();
        Thread.sleep(500);
    }

    @And("^User clicks Invoicing link$")
    public void userClicksInvoicingLink() throws Throwable {
        hp.invoicingModule.click();
    }
}
