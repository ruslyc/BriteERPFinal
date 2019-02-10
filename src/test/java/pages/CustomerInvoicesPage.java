package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CustomerInvoicesPage {

    WebDriver driver;

    public CustomerInvoicesPage(){
        this.driver = Driver.getDriver();
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//div[@class='o_list_buttons']/button[@class='btn btn-primary btn-sm o_list_button_add']")
    public WebElement createButton;

    @FindBy(xpath = "//input[@class='o_searchview_input']")
    public WebElement searchField;

    @FindBy(xpath = "//span[@title='Advanced Search...']")
    public WebElement advancedSearchButton;

    @FindBy(xpath = "//span[@class='fa fa-filter']/..")
    public WebElement filterSearch;

    @FindBy(xpath = "//span[@class='fa fa-bars']/..")
    public WebElement groupBySearch;

    @FindBy(xpath = "//span[@class='fa fa-star']/..")
    public WebElement favoritesSearch;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_form_button_save']")
    public WebElement safeButton;

    @FindBy(xpath = "//button[@class='btn btn-sm btn-default oe_highlight o_invoice_validate']")
    public WebElement validateButton;

    @FindBy(xpath = "//button[@class='btn btn-default btn-sm o_form_button_cancel']")
    public WebElement discardButton;

    @FindBy(xpath = "//td[@class='o_data_cell o_required_modifier']")
    public WebElement customerNameInTable;

    @FindBy(xpath = "//input[@id='o_field_input_802']")
    public WebElement customerField;

    @FindBy(xpath = "//h4[@class='modal-title']")
    public WebElement createACustomer;

}
