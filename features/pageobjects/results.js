const {$} = require('@wdio/globals');

const product = "//span[@class='a-size-medium a-color-base a-text-normal'][normalize-space()='Apple iPhone 15 Pro (256 GB) - Blue Titanium']";

class ResultsPage{
    async checkSearchRedirection(){
        if(browser.getTitle()=='Amazon.in : Apple iPhone 15 Pro (256 GB) - Blue Titanium')
            return true;
        else   
            return false;
    }

    async selectProduct(){
        await $(product).waitForExist({timeout:5000})
        await $(product).click();
    }

}

module.exports = new ResultsPage();