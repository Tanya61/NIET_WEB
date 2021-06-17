//let matchLink = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
//const { format } = require("path");

let leaderboard = [];
let count =0;
function getMatchDetails(matchLink){
    console.log(`Sending Request${count}`);
    count++;
    //Async
    request(matchLink,function(error, response, html){
        count--;
        console.log("Inside Callback ${count}");
        processHTML(html);
    })
    
}


function processHTML(html){
    let ch = cheerio.load(html);
    let bothinnings = ch('.Collapsible');
    //fs.writeFileSync("match.html", bothinnings+"");
    for(let i=0 ;i<bothinnings.length;i++){
        let oneInning = bothinnings[i];
        teamName = ch(oneInning).find("h5").text().split(" INNINGS ")[0];
        console.log(teamName);

        let allTrs = ch(oneInning).find(".table.batsman tbody tr");
        for(let j=0;j<allTrs.length-1;j++){
            let allTds = ch(allTrs[j]).find("td");
            if(allTds.length>1){
                //0 batsmanName
                let BatsmanName = ch(allTds[0]).text();
                //2 runs
                let runs = ch(allTds[2]).text();
                //3 balls
                let balls = ch(allTds[3]).text();
                //5 fours
                let fours = ch(allTds[5]).text();
                //6 sixes
                let sixes = ch(allTds[6]).text();
                //7 strikeRate
                let strikeRate = ch(allTds[7]).text();

                //console.log(`BatsMan = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} StrikeRate = ${strikeRate}`);
                processLeaderBoard(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate);
            }
        }
        
    }
    console.log("######################################");
}

function processLeaderBoard(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let lobj = leaderboard[i];
        if(lobj.Team == teamName && lobj.Batsman == BatsmanName){
            lobj.Runs+=runs;
            lobj.Balls+=balls;
            lobj.Fours+=fours;
            lobj.Sixes+=sixes;
            return;
        }
    }
    let innings = {
        Team : teamName,
        Batsman : BatsmanName,
        Runs : runs,
        Balls : balls,
        Fours : fours,
        Sixes : sixes
    }
    leaderboard.push(innings);
}

module.exports = getMatchDetails;