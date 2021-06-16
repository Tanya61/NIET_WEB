const request = require("request");
const cheerio = require("cheerio");

// request => Async function
let link =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-delhi-capitals-27th-match-1216529/full-scorecard";
request(link, cb);

function cb(error, response, html) {
  evalHTML(html);
}

function evalHTML(html){
    let ch = cheerio.load(html);
    //let winteam = ch('.event .status-text span').text();
    let allBowlers = ch(".table.bowler tbody tr");

    let highestWicketTakerName;
    let highestWickets;
    let lowesteconomy;
    for(let i=0;i<allBowlers.length;i++){
      let oneBowlerDetail = allBowlers[i];

      let allTDs = ch(oneBowlerDetail).find("td");
      //0->Name
      BowlerName = ch(allTDs[0]).text();
      //4->Wickets
      Wickets = ch(allTDs[4]).text();
      //5->ECON
      Economy = ch(allTDs[5]).text();

      if(i==0){
        highestWicketTakerName = BowlerName;
        highestWickets = Wickets;
        lowesteconomy = Economy;
      }
      else if(Wickets>highestWickets ||(Wickets==highestWickets && Economy<lowesteconomy)){
        highestWicketTakerName = BowlerName;
        highestWickets = Wickets;
        lowesteconomy = Economy;
      }
    }
    console.log(`Highest Wicket Taker is ${highestWicketTakerName} with ${highestWickets} wickets and a economy of ${lowesteconomy}`);
}