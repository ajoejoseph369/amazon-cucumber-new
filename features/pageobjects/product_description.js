const {$} = require('@wdio/globals');

const addToCartBtn ='//input[@id="add-to-cart-button" and @type="submit"]'
const viewCartBtn = "//input[@aria-labelledby='attach-sidesheet-view-cart-button-announce']"

class Product_Description{

    async changeTab(){

        const originalWindowHandle = await browser.getWindowHandle();
        const windowHandles = await browser.getWindowHandles();

        let newWindowHandle;
        for(const handle of windowHandles){
            if(handle!==originalWindowHandle){
                newWindowHandle = handle;
                break;
            }
        }
        await browser.switchToWindow(newWindowHandle);
    }

    async addToCart(){
        await $(addToCartBtn).click();
    }

    async viewCart(){
        await $(viewCartBtn).waitForDisplayed({timeout:5000})
        await $(viewCartBtn).click();
    }

    async checkRedirectionToCart(){
        if(browser.getTitle()=='Amazon.in Shopping Cart')
            return true;
        else
            return false;
    }
}

module.exports = new Product_Description();