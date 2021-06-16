//let matchLink = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
//const { format } = require("path");

function getMatchDetails(matchLink){
    request(matchLink,function(error, response, html){
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
                processDetails(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate);
            }
        }
        
    }
    console.log("######################################");
}
function checkifTeamFolderExist(teamName){
    let teamFolderPath = `./IPL/${teamName}`;
    return fs.existsSync(teamFolderPath);
}
function checkifBatsmanFileExist(teamName, BatsmanName){
    let batsmanFilePath = `./IPL/${teamName}/${BatsmanName}.json`;
    return fs.existsSync(batsmanFilePath);
}
function createBatsmanFile(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate){
    let batsmanFilePath = `./IPL/${teamName}/${BatsmanName}.json`;
    let batsmanFile = [];
    let batsmanDetails = {
        Runs : runs,
        Balls : balls,
        Fours : fours,
        Sixes : sixes,
        StrikeRate : strikeRate
    }
    batsmanFile.push(batsmanDetails);
    fs.writeFileSync(batsmanFilePath, JSON.stringify(batsmanFile));
}
function createTeamFolder(teamName){
    let teamFolderPath = `./IPL/${teamName}`;
    fs.mkdirSync(teamFolderPath);
}
function updateBatsmanFile(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate){
    let batsmanFilePath = `./IPL/${teamName}/${BatsmanName}.json`;
    let batsmanFile = fs.readFileSync(batsmanFilePath);
    batsmanFile = JSON.parse(batsmanFile);
    let batsmanDetails = {
        Runs : runs,
        Balls : balls,
        Fours : fours,
        Sixes : sixes,
        StrikeRate : strikeRate
    }
    batsmanFile.push(batsmanDetails);
    fs.writeFileSync(batsmanFilePath, JSON.stringify(batsmanFile));
}

function processDetails(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate){
    let isTeamFolderExist = checkifTeamFolderExist(teamName);
    //False value can be false, 0, NAN, "", null, undefined
    if(isTeamFolderExist){
        let isBatsmanFileExist = checkifBatsmanFileExist(teamName, BatsmanName);
        if(isBatsmanFileExist){
            updateBatsmanFile(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate);
        }
        else{
            createBatsmanFile(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate);
        }
    }   
    else{
        createTeamFolder(teamName);
        createBatsmanFile(teamName, BatsmanName, runs, balls, fours, sixes, strikeRate);
    } 
}

module.exports = getMatchDetails;