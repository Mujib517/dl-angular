import { browser, element, by } from 'protractor';

describe("Home Page", () => {

  browser.get("/");

  it("Should have DlAngular Title", () => {
    expect(browser.getTitle()).toBe("DlAngular");
  });

  it("Should have Home Page heading", () => {
    let h1 = element(by.css("h1"));

    expect(h1.getText()).toBe("Home Page");
  });

  it("Should navigate to contact page", () => {
    var link = element(by.css('a[href="/contact"]'));
    link.click();
    expect(browser.getCurrentUrl()).toBe("http://localhost:4300/contact");
  });

  it("Should have contact page heading", () => {
    var headings = element.all(by.css("h1"));
    var h1 = headings.get(0);

    expect(h1.getText()).toBe("Contact Page");
  });


  it("Should navigate to products page", () => {
    var link = element(by.css('a[href="/products"]'));
    link.click();
    expect(browser.getCurrentUrl()).toBe("http://localhost:4300/products");
  });

  it("Should navigate to add new product page", () => {
    var btn = element(by.css(".btn.btn-info"));

    btn.click();

    expect(browser.getCurrentUrl()).toBe("http://localhost:4300/products/new");
  });

  it("SHould have save button disabled", () => {
    var saveBtn = element(by.css(".btn.btn-info"));
    expect(saveBtn.isEnabled()).toBe(false);
  });

  it("Should enable save button when validations pass", () => {
    var brand = element(by.css('input[name="brand"]'));
    var model = element(by.css('input[name="model"]'));
    var price = element(by.css('input[name="price"]'));

    brand.sendKeys("Apple");
    model.sendKeys("Iphone X");
    price.sendKeys("2000");

    var saveBtn = element(by.css(".btn.btn-info"));
    expect(saveBtn.isEnabled()).toBe(true);
  });

  it("Should save product and show success message", () => {

    var saveBtn = element(by.css(".btn.btn-info"));
    saveBtn.click();
    
    var msg = element(by.css(".alert.alert-success"));
    expect(msg.isDisplayed()).toBe(true);
  });

});