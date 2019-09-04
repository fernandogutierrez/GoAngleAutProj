let { Given } = require('cucumber');

Given(/^I open site '(.*)'$/,(siteUrl) => {
    browser.url(siteUrl);
    browser.windowHandleMaximize();
});
