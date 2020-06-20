describe ('test1', function() {
    const repository = require('C:/repository.js');
    const EC = protractor.ExpectedConditions;

    it ('home page', function(){
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get("http://example.com");
    });

    it ('search by className', function() {
        element.all(by.className('h3')).get(2).click();
        expect(element(by.className('example')).isPresent()).toBe(true);
    });

    it ('input credentials', function() {
        element(by.id('loginForm:loginField')).sendKeys("login1");
        element(by.id('loginForm:passField')).sendKeys("password1");
        expect(element(by.id('loginForm:loginField')).getAttribute('value')).toContain('login1');
    });

    //delaying test execution
    it ('test delay', function() {
        element(by.id('button')).click();
        browser.wait(EC.elementToBeClickable(element(by.id('123'))), 1000);
        expect(element(by.className('h1')).isPresent()).toBe(true);
    });

    it ('file to upload', function() {
        repository.fileToUpload('C:/file.zip');
        expect(element(by.className('file_input')).getText()).toContain('file.zip');
    });
);
