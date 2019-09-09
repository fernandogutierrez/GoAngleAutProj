let { Given } = require('cucumber');
let defTimeout = 30000;

Given(/^I open site '(.*)'$/,(siteUrl) => {
    browser.url(siteUrl);
    browser.maximizeWindow();
});

Given(/^I select '(.*)' as destination$/,(destination) => {
    $("//input[@placeholder='Type your city']").setValue(destination);
});

Given(/^I select '(.*)' as starting time/,(stTime) => {
    $("//input[@placeholder='Select...']").setValue(stTime);
    $("//h1[text()='Book Your Photo Session']").click();
});

Given(/^I select photographer '(.*)'$/,(photographer) => {
    let photoXpath = `//h3[text()='${photographer}']/parent::a`;
    $(photoXpath).waitForExist(defTimeout);
    $(photoXpath).click();
    browser.pause(3000);
});

Given(/^I click on '(.*)'$/,(btnName) => {
    let buttonXpath = `//button/descendant::*[text()='${btnName}']`;
    $(buttonXpath).waitForDisplayed(defTimeout);
    $(buttonXpath).waitForExist(defTimeout);
    $(buttonXpath).waitForEnabled(defTimeout);
    $(buttonXpath).click();
});

Given(/^I select package '(.*)'$/,(packageName) => {
    $(`//h4[text()='${packageName}']/following-sibling::div/button/span[text()='Select']`).click();
});

Given(/^I set an email address '(.*)'$/,(email) => {
    let emailXpath = "//label[text()='Your Email']/following-sibling::div/input[@placeholder='Email address']";
    $(emailXpath).waitForExist(defTimeout);
    $(emailXpath).setValue(email);
});

Given(/^I set a password '(.*)'$/,(password) => {
    $("//input[@placeholder='Password']").setValue(password);
    $("//input[@placeholder='Re-type password']").setValue(password)
});

Given(/^I insert First Name '(.*)'$/,(firstName) => {
    let firstNXpath = "//input[@placeholder='First Name']";
    $(firstNXpath).waitForExist(defTimeout);
    $(firstNXpath).setValue(firstName);
});

Given(/^I insert Last Name '(.*)'$/,(lastName) => {
    $("//input[@placeholder='Last Name']").setValue(lastName);
});

Given(/^I select Type of Tour '(.*)'$/,(typeTour) => {
    browser.pause(5000);
    let typeTourXpath = `//span[text()='${typeTour}']/ancestor::label`;
    $(typeTourXpath).waitForExist(defTimeout);
    $(typeTourXpath).click();
});

Given(/^I select How did you hear about us '(.*)'$/,(socialMedia) => {
    let socialMXpath = `//span[text()='${socialMedia}']/ancestor::label`;
    $(socialMXpath).waitForExist(defTimeout);
    $(socialMXpath).click();
});

Given(/^I select I Agree to Angle Terms of Service$/,() => {
    $("//label[text()='I agree to Angle Terms of Service']/preceding-sibling::*").click();
});

Given(/^I insert a Name on Card '(.*)'$/,(nameOnCard) => {
    let nameOnCardXPath = `//input[@placeholder='Name on Card']`;
    $(nameOnCardXPath).waitForExist(defTimeout);
    $(nameOnCardXPath).setValue(nameOnCard);
});

Given(/^I insert the Card Number '(.*)'$/,(cardNumber) => {
    let cardNumberXPath = `//label[text()='Card Number']/following-sibling::div[contains(@class,'StripeElement')]/div`;
    $(cardNumberXPath).waitForExist(defTimeout);
    $(cardNumberXPath).doubleClick();
    cardNumber.split("").forEach((cardChar)=>{ browser.keys(cardChar) });

    $(cardNumberXPath).click();
    cardNumber.split("").forEach((cardChar)=>{ browser.keys(cardChar) });
    browser.pause(15000);
});

Given(/^I insert the Exp Date '(.*)'$/,(expDate) => {
    let expDateXPath = `//label[text()='Exp Date']/following-sibling::div[contains(@class,'StripeElement')]`;
    $(expDateXPath).waitForExist(defTimeout);
    $(expDateXPath).click();
    expDate.split("").forEach((eDateChar)=>{browser.keys(eDateChar)})
});

Given(/^I insert the CVV '(.*)'$/,(cvv) => {
    let cvvXPath = `//label[text()='Exp Date']/following-sibling::div[contains(@class,'StripeElement')]`;
    $(cvvXPath).waitForExist(defTimeout);
    $(cvvXPath).click();
    cvv.split("").forEach((cvvChar)=>{browser.keys(cvvChar)})
});
