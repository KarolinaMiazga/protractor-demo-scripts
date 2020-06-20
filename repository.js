var repository = function() {

this.fileToUpload = function(value) {
    let path = require('path');
    let fileToUpload = value;
    absolutePath = path.resolve(_dirname, fileToUpload);
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    browser.sleep(2000);
};    
};

module.exports = new.repository();