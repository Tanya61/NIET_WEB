const puppeteer = require("puppeteer");
let id = "mifif53635@beydent.com";
let pw = "12347890";
let tab;
//puppeteer functions => promisified functions
//open a browser

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["==start-maximized"]
});

browserOpenPromise.then(function(browserInstance){
    let pagePromise = browserInstance.pages();
    return pagePromise;
})
.then(function(pages){
    let page = pages[0];
    tab = page;
    let gotoPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
})
.then(function(){
    let idTypePromise = tab.type("#input-1", id);
    return idTypePromise;
})
.then(function(){
    let pwTypePromise = tab.type("#input-2", pw);
    return pwTypePromise;
})
.then(function(){
    let loginPromise = tab.click('.ui-btn.ui-btn-large');
    return loginPromise;
})
.then(function(){
    //wait for Selector
    let waitPromise = tab.waitForSelector('#base-card-1-link', {visible:true});
    return waitPromise;
})
.then(function(){
    let iprepclickPromise = tab.click('#base-card-1-link');
    return iprepclickPromise;
})
.then(function(){
    let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]',{visible:true});
    return waitPromise;
})
.then(function(){
    let warmupclickPromise = tab.click('a[data-attr1="warmup"]');
    return warmupclickPromise;
})
.then(function(){
    let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item',{visible:true});
    return waitPromise;
})
.then(function(){
    let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
    return allATagsPromise;
})
.then(function(allATags){
    //[<a href=""></a> , <a ></a> , <a></a> , <a></a> ];
    let allQuesLinksPromise = [];
    for(let i=0;i<allATags.length;i++){
        let quesLinkPromise = tab.evaluate(function(elem){  return elem.getAttribute("href");  } ,  allATags[i]);
        allQuesLinksPromise.push(quesLinkPromise);
    }
    //   allQuesLinkPromise = [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let combinedPromise = Promise.all(allQuesLinksPromise);
    return combinedPromise; //Promise<Pending>
})
.then(function(allQuesLinks){
    console.log(allQuesLinks);
})
.catch(function(err){
    console.log(err);
})