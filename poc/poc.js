let puppeteer=require("puppeteer");
let gTab;
puppeteer.launch({
    headless:false ,
    defaultViewport: null,
    args:["--start-maximized"],
})
.then(function(browser){
    let browerPagePromise=browser.pages();
    return browerPagePromise;
})
.then(function(pages){
    // console.log(pages);
    let page=pages[0];
    gTab=page;
    let gotoPromise=page.goto("http://www.google.com/");
    return gotoPromise;
})

.then(function(){
    let clickPromise=gTab.click(".pR49Ae.gsfi");
    return clickPromise;
})
.then(function(){
    let typePromise=gTab.type(".pR49Ae.gsfi","joey tribbiani");
    return typePromise;
})
.then(function(){
    let enter=gTab.keyboard.press("Enter");
    return enter;
})
.then(function(){
    let waitPromise=gTab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf",{visible:true});
    return waitPromise;
})
.then(function(){
    let clickPromise=gTab.click(".ZHyHcb.uTqStd.JlrwAf");
    return clickPromise;
})
.then(function(){
    console.log('yayyyy')
})
.catch(function(error){
    console.log(error);
})