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


    @FindBy(xpath = "//a[@class='btn btn-default']")
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

    @FindBy(xpath = "//a[@class='dropdown-toggle']//span")
    public WebElement menuButton;

    @FindBy(xpath = "//a[@data-menu='logout']")
    public WebElement logoutButton;

    @FindBy(xpath = "//span[.='Lunch_Invoicing_User4']")
    public WebElement menuDropDown;

    @FindBy(xpath = "//a[.='Logout']")
    public WebElement logOut;

    @FindBy(xpath = "//a[@class='dropdown full']")
    public WebElement websiteDropdown;

    @FindBy(xpath = "//a[contains(span,'Invoicing')]")
    public WebElement invoicingOption;

    public void login(String username, String password){
        BriteErpDemoOption.click();
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        loginButton.click();
    }

    public void logout(){
//        menuButton.click();
//        loginButton.click();
        menuDropDown.click();
        logOut.click();
    }


}
