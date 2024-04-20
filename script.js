function OpeningCeremony(callback) {
    console.log("Let the games begin!");
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };
  
    console.log("Race100M Times:", times);
  
    const sortedTimes = Object.keys(times).sort((a, b) => times[a] - times[b]);
    score[sortedTimes[0]] += 50;
    score[sortedTimes[1]] += 25;
  
    console.log("Race100M Scores:", score);
  
    setTimeout(() => {
      LongJump(score, callback);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    const color = ["red", "yellow", "blue", "green"][Math.floor(Math.random() * 4)];
    score[color] += 150;
  
    console.log(`Long Jump winner: ${color}`);
  
    console.log("Long Jump Scores:", score);
  
    setTimeout(() => {
      HighJump(score, callback);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    const color = prompt("What colour secured the highest jump?");
    if (color && score[color]) {
      score[color] += 100;
    } else {
      console.log("Event was cancelled");
    }
  
    console.log("High Jump Scores:", score);
  
    callback(score);
  }
  
  function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
  }
  
  OpeningCeremony(AwardCeremony);
  