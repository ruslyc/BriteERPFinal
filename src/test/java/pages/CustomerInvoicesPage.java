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

    @FindBy(xpath = "//div[@name='partner_id']/div/input")
    public WebElement customerField;

    @FindBy(xpath = "(//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped']/tbody/tr/td[@class='o_data_cell o_required_modifier'])[1]")
    public WebElement createACustomer;

    @FindBy(xpath = "//span[.='Create']")
    public WebElement createAgain;

    @FindBy(xpath = "//li[.='Customer Invoices']")
    public WebElement customerInvoicePage;

    @FindBy(xpath = "//div[@class='o_cp_sidebar']//div[contains(button,'Action')]")
    public WebElement actionButton;

    @FindBy(xpath = "(//ul[@class='dropdown-menu'])[5]/li[1]")
    public WebElement deleteButton;

    @FindBy(xpath = "//h4[@class='modal-title']")
    public WebElement confirmationPage;

    @FindBy(xpath = "//button[@class='btn btn-sm btn-default']")
    public WebElement cancelButton;




}
