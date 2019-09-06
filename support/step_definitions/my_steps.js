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
    $("//h1[text()='Pack a Photographer']").click();
});

Given(/^I select photographer '(.*)'$/,(photographer) => {
    let photoXpath = `//h3[text()='${photographer}']/parent::a`;
    $(photoXpath).waitForExist(defTimeout);
    $(photoXpath).click();
});

Given(/^I click on '(.*)'$/,(btnName) => {
    browser.pause(3000);
    let buttonXpath = `//button/descendant::*[text()='${btnName}']`;
    $(buttonXpath).waitForExist(defTimeout);
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









