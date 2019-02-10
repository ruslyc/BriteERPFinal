package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.CustomerInvoicesPage;
import utilities.Config;
import utilities.Driver;

public class CustomerInvoices_steps {

    CustomerInvoicesPage ci = new CustomerInvoicesPage();

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
    public void user_enter_on_mandatory_Name_field(String string) throws InterruptedException {
        Thread.sleep(1000);
        ci.customerField.sendKeys(Config.getProperty("name"));
    }

    @Then("User clicks Save button on top left of the page")
    public void user_clicks_Save_button_on_top_left_of_the_page() throws InterruptedException {
        Thread.sleep(1000);
        ci.safeButton.click();
    }

    @Then("User clicks Save button again")
    public void user_clicks_Save_button_again() throws InterruptedException {
        Thread.sleep(1000);
        ci.safeButton.click();
    }

    @Then("User verifying that \\\"([^\"]*)\\\" displays in the table on Customer Invoices page")
    public void user_verifying_that_displays_in_the_table_on_Customer_Invoices_page(String string) {
        String createACustomer = ci.createACustomer.getText();
        Assert.assertTrue(createACustomer.equals("Create a Customer"));
    }
}
