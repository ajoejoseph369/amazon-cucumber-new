const {$} = require('@wdio/globals');

const product = '//span[contains(text(), "iPhone 15 Pro (256 GB) - Blue Titanium")]';

class ResultsPage{
    async checkSearchRedirection(){
        if(browser.getTitle()=='Amazon.in : Apple iPhone 15 Pro (256 GB) - Blue Titanium')
            return true;
        else   
            return false;
    }

    async selectProduct(){
        await $(product).waitForExist({timeout:5000});
        const prod = await $$(product);
        let count = 1;
        for(const pd of prod){
            count = count + 1;
            await pd.waitForClickable({ timeout: 5000 });
            if(count==2){
                if(await pd.isClickable()){
                    await pd.click();
                    console.log("Element clicked");
                    break;
                }
            }
        }
    }

}

module.exports = new ResultsPage();