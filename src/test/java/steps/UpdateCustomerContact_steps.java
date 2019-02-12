package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.SalesCustomersPage;

public class UpdateCustomerContact_steps {

    SalesCustomersPage scp = new SalesCustomersPage();


    @When("User clicks on random customer")
    public void user_clicks_on_random_customer() {
        scp.randomCustomer.click();
    }

    @When("User clicks Edit button")
    public void user_clicks_Edit_button() {
        scp.editButton.click();
    }

    @When("User clicks Create button")
    public void user_clicks_Create_button() {
        scp.createButton.click();
    }

    @When("User inputs a random name in the name for the contact")
    public void user_inputs_a_random_name_in_the_name_for_the_contact() {
        scp.contactNameInput.sendKeys("John");
    }

    @When("User clicks Save and Close button")
    public void user_clicks_Save_and_Close_button() {
        scp.saveAndCloseButton.click();
    }

    @Then("User should see the new contact detail.")
    public void user_should_see_the_new_contact_detail() {
        Assert.assertEquals(scp.verifyContactName.getText(),"John");
    }

}
