package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.HomePage;
import utilities.Config;
import utilities.Driver;

public class Login_steps {

    HomePage hp = new HomePage();

    @Given("the user is on the login page and user enters valid credentials")
    public void the_user_is_on_the_login_page_and_user_enters_valid_credentials() {
        Driver.getDriver().get(Config.getProperty("url"));
        hp.login(Config.getProperty("emailUser4"), Config.getProperty("passwordUser4"));
    }

    @Then("user should be on Home page clicks Invoicing link on top left of the page")
    public void user_should_be_on_Home_page_clicks_Invoicing_link_on_top_left_of_the_page() throws InterruptedException {
        Thread.sleep(2000);
        hp.invoicingModule.click();

    }

    @Then("user should land on Invoicing page")
    public void user_should_land_on_Invoicing_page() {
        Wait wait = new WebDriverWait(Driver.getDriver(), 30);
        wait.until(ExpectedConditions.titleIs("Customer Invoices - Odoo"));
//        Assert.assertEquals(Driver.getDriver().getTitle(),"Customer Invoices - Odoo");
    }
}
