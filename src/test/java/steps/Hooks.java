package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.HomePage;
import utilities.Config;
import utilities.Driver;

public class Hooks {

    HomePage hp = new HomePage();
    @Before
    public void setUp() throws InterruptedException {
        Driver.getDriver().get(Config.getProperty("url"));
        if (Driver.getDriver().getTitle().startsWith("Home")){

            hp.signinButton.click();
            hp.selectButton.click();
            hp.login(Config.getProperty("emailUser4"), Config.getProperty("passwordUser4"));
            Thread.sleep(2000);
            hp.invoicingModule.click();
            Wait wait = new WebDriverWait(Driver.getDriver(), 30);
            wait.until(ExpectedConditions.titleIs("Customer Invoices - Odoo"));
        }else {
            hp.login(Config.getProperty("emailUser4"), Config.getProperty("passwordUser4"));
            Thread.sleep(2000);
            hp.invoicingModule.click();
            Wait wait = new WebDriverWait(Driver.getDriver(), 30);
            wait.until(ExpectedConditions.titleIs("Customer Invoices - Odoo"));
        }
    }


    @After
    public void tearDown(Scenario scenario) throws InterruptedException {
        if (scenario.isFailed()){
            final byte [] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png");
        }
        HomePage hp = new HomePage();
        Thread.sleep(2000);
        hp.menuButton.click();
        hp.logoutButton.click();
//        Driver.getDriver().manage().deleteAllCookies();

    }


}
