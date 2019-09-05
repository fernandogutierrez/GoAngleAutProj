let { Given } = require('cucumber');

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
    let photoXpath = `//h3[text()='${photographer}']/ancestor::div[@class='wrappers__DinamicDiv-sc-83cfqq-0 dTAlQV']/following-sibling::button/descendant::div[text()='Select Photographer']`;
    $(photoXpath).click();
});

Given(/^I click on '(.*)'$/,(btnName) => {
    $(`//button/descendant::*[text()='${btnName}']`).click();
    browser.pause(10000)
});

Given(/^I select package '(.*)'$/,(packageName) => {
    $(`//h4[text()='${packageName}']/following-sibling::div/button/span[text()='Select']`).click();
});





