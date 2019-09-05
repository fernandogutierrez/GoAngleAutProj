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
    let button = $(`//button/descendant::*[text()='${btnName}']`);
    button.waitForExist(defTimeout);
    button.click();
});

Given(/^I select package '(.*)'$/,(packageName) => {
    $(`//h4[text()='${packageName}']/following-sibling::div/button/span[text()='Select']`).click();
});
