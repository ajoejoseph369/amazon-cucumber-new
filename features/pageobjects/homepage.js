const {$} = require("@wdio/globals");

const signInbtn = '#nav-link-accountList-nav-line-1';
const searchBar = "//input[@id='twotabsearchtextbox']";
const searchIcon = "//input[@id='nav-search-submit-button']";

class HomePage{

    async getUrl(){
        await browser.url('https://www.amazon.in');
        await browser.maximizeWindow();
    }

    async clickSignIn(){
        await $(signInbtn).click();
    }

    async checkLoginRedirection(){
        if(browser.getTitle()=='Amazon Sign In')
            return true;
        else
            return false;
    }

    async searchProduct(product_details){
        await $(searchBar).setValue(product_details);
    }

    async clickSearchIcon(){
        await $(searchIcon).click();
    }

}

module.exports = new HomePage();