package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SalesCustomersPage {

    WebDriver driver;

    public SalesCustomersPage(){
        this.driver = Driver.getDriver();
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//a[@href='/web#menu_id=203&action=']")
    public WebElement MasterDataButton;

    @FindBy(xpath = "//a[@href='/web#menu_id=233&action=49']")
    public WebElement Customers;

    @FindBy(xpath = "//button[contains(text(),'Create')]")
    public WebElement CreateButton;

    @FindBy(xpath = "//input[@name ='name']")
    public WebElement NameInput;

    @FindBy(xpath = "//span[@name='name']")
    public WebElement CustomerNameVerify;

    @FindBy(xpath = "//*[contains(text(),'Save')]")
    public WebElement SaveButton;
}
