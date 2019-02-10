package pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class HomePage {

    WebDriver driver;

    public HomePage(){
        this.driver = Driver.getDriver();
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//a[@href='/web/login']/b")
    public WebElement signinButton;

    @FindBy(xpath = "//a[@href='/web/database/selector']")
    public WebElement selectButton;

    @FindBy(xpath = "//a[@href='/web?db=BriteErpDemo']")
    public WebElement BriteErpDemoOption;

    @FindBy(xpath = "//input[@id='login']")
    public WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement loginButton;

    @FindBy(xpath = "//div[@class='navbar-collapse collapse']//a[@data-menu-xmlid='account.menu_finance']/span")
    public WebElement invoicingModule;

    public void login(String username, String password){
        BriteErpDemoOption.click();
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        loginButton.click();
    }


}
