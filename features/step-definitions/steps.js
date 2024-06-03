const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/homepage.js');
const LoginPage = require('../pageobjects/loginpage.js');
const ResultsPage = require('../pageobjects/results.js');
const ProductDescriptionPage = require('../pageobjects/product_description.js');

//homepage

Given(/^user is on homepage$/, async ()=> {
    await HomePage.getUrl();
});

When(/^user clicks sign in$/, async ()=>{
    await HomePage.clickSignIn();
} )

Then(/^user is redirected to login page$/, async ()=>{
    await HomePage.checkLoginRedirection();
})

//loginpage

Given(/^user is on the login page$/, async ()=>{
    return true;
})

When(/^user enters (.*) and clicks on continue button$/, async (username)=>{
    await LoginPage.enterUsername(username);
    await LoginPage.clickContinue();
})

Then(/^user enters (.*) and clicks on sign in button$/, async (password)=>{
    await LoginPage.enterPassword(password);
    await LoginPage.clickSignIn();
})

Then(/^user is redirected to homepage$/, async ()=>{
    await LoginPage.checkSignIn();
})

//search product
Given(/^user is on the hompage$/, async ()=>{
    return true;
})

When(/^user clicks on the search bar and enters (.*)$/, async (product_details)=>{
    await HomePage.searchProduct(product_details);
})

When(/^clicks on the search icon$/, async ()=>{
    await HomePage.clickSearchIcon();
})

Then(/^user is redirected to the product listing page$/, async ()=>{
    await ResultsPage.checkSearchRedirection();
})

//product description page

Given(/^user is on the results page$/, async ()=> {
    return true;
})
When(/^user clicks on the product searched$/, async ()=>{
    await ResultsPage.selectProduct();
})
Then(/^user is redirected to product description page$/, async ()=>{
    await ProductDescriptionPage.changeTab();
})


Given(/^user is on the product description page$/, async () => {
	return true;
});

When(/^user clicks on add to cart button$/, async () => {
	await ProductDescriptionPage.addToCart();
});

Then(/^user clicks on view cart button$/, async () => {
	await ProductDescriptionPage.viewCart();
});

Then(/^user is able to view the cart$/, async () => {
	await ProductDescriptionPage.checkRedirectionToCart();
});
