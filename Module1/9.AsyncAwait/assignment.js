const puppeteer = require("puppeteer");
let name = "anika mehta";
let id = "mifif53635@beydent.com";
let pw = "12347890";
let dob = "19 june 2006";
let search = "pepcoding";

(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://www.facebook.com/login");
        await tab.type("#email_container", id);
        await tab.type("#pass", pw);
        await tab.click("#loginbutton");
        await tab.type(".hv4rvrfc .b5q2rw42 .k4urcfbm .oajrlxb2", search);
    }
    catch{
        console.log(err);
    }
})();