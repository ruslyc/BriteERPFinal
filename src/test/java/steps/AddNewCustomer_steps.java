package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.SalesCustomersPage;
import utilities.Config;
import utilities.Driver;

public class AddNewCustomer_steps {
    SalesCustomersPage scp = new SalesCustomersPage();

    @When("User clicks on Master Data button")
    public void user_clicks_on_Master_Data_button() {
      scp.MasterDataButton.click();
    }

    @When("User clicks on Customers button")
    public void user_clicks_on_Customers_button() throws InterruptedException {
     scp.Customers.click();
     Thread.sleep(10000);
    }

    @When("User clicks on Create button")
    public void user_clicks_on_Create_button() throws InterruptedException {
       scp.CreateButton.click();
       Thread.sleep(3000);
    }

    @When("User inputs a random name in the name field")
    public void user_inputs_a_random_name_in_the_name_field() {
        scp.NameInput.sendKeys(Config.getProperty("name"));
    }

    @When("User clicks on Save button")
    public void user_clicks_on_Save_button() {
      scp.SaveButton.click();
    }

    @Then("User should see the new customer created under used name.")
    public void user_should_see_the_new_customer_created_under_used_name() {
        Assert.assertEquals(scp.CustomerNameVerify.getText(), Config.getProperty("name"));
    }
}
