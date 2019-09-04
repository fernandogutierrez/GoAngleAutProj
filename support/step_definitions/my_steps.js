let { Given } = require('cucumber');

Given(/^I open site '(.*)'$/,(siteUrl) => {
    browser.url(siteUrl);
    browser.windowHandleMaximize();
});

Given(/^I select '(.*)' as destination$/,(destination) => {
    browser.element("//input[@placeholder='Type your city']").set(destination)
});

Given(/^I select '(.*)' as date/,(destination) => {
    browser.element("//input[@placeholder='Select...']").set(destination)
});

Given(/^I select '(.*)' as starting time$/,(destination) => {
    browser.element("//button/span[text()='Search']").set(destination)
});