let allMatchesLink = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results';

const request = require("request");
const cheerio = require("cheerio");
const getMatchDetails = require("./match");

request(allMatchesLink, function(error, res, data){
    processHTML(data);
})

function processHTML(data){
    let ch = cheerio.load(data);
    let AllATags = ch('a[data-hover="Scorecard"]');
    for(let i=0;i<AllATags.length;i++){
        let matchLink = "https//www.espncricinfo.com"+ch(AllATags[i]).attr("href");
        getMatchDetails(matchLink);
    }
}