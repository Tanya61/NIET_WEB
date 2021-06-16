// go to niet folder location in terminal
// npm init -y
// npm i cheerio
// add node_modules in .gitignore


const fs = require("fs");
const cheerio = require("cheerio");

let htmldata = fs.readFileSync("./index.html","utf8");

let ch = cheerio.load(htmldata);

console.log(cheerio);