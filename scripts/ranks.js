var rankList = document.getElementById("rankList");
var top10Div = document.getElementById("top10Div");
var leaderboard = document.getElementById("leaderBoard");
var macBtn = document.getElementById("macBtn");
var teamBtn = document.getElementById("teamBtn");
var checkRank = document.getElementById("checkRank");
var data, mac, karma;

var team = [
      {
          name:"Team 1",
          lead:"Christo John",
          members:[],
          score:0,
          memberCount:0
      },
      {
        name:"Team 2",
        lead:"Harigovind S",
        members:[],
        score:0,
        memberCount:0
      },
      {
        name:"Team 3",
        lead:"Pavan T Sunu",
        members:[],
        score:0,
        memberCount:0
      },
      {
        name:"Team 4",
        lead:"Alwin Siby",
        members:[],
        score:0,
        memberCount:0
      },
      {
        name:"Team 5",
        lead:"Binnet Binoy",
        members:[],
        score:0,
        memberCount:0
      },
      {
        name:"Team 6",
        lead:"Aparna Jiji",
        members:[],
        score:0,
        memberCount:0
      }
]

function fetchMac(){
  return fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac")
    .then((res)=>res.json())
    .catch((Error =>{
      console.log("fetchMac failed=> catched error error = :\n" + Error);
    }))
}

function fetchKarma(){
     return fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/karmaPoints")
    .then((res)=>res.json())
    .then((karma) =>{
      console.log("Karma return success");
      return karma;
    })
      .catch((Error =>{
        console.log("fetchKarma failed=> catched error error = :\n" + Error);
      }))
}

function fetchTeam(){
  return fetchMac()
    .then((mac)=>{
      for(i=0; i<mac.length; i++){
        switch(mac[i].lead){
          case 'c':{
            team[0].members[team[0].memberCount] = i;
            team[0].score = team[0].score + parseInt(mac[i].MACscoreToday);
            team[0].memberCount++;
            break;
          }

          case 'h':{
            team[1].members[team[1].memberCount] = i;
            team[1].score = team[1].score + parseInt(mac[i].MACscoreToday);
            team[1].memberCount++;
            break;
          }

          case 'p':{
            team[2].members[team[2].memberCount] = i;
            team[2].score = team[2].score + parseInt(mac[i].MACscoreToday);
            team[2].memberCount++;
            break;
          }

          case 'a':{
            team[3].members[team[3].memberCount] = i;
            team[3].score = team[3].score + parseInt(mac[i].MACscoreToday);
            team[3].memberCount++;
            break;
          }

          case 'b':{
            team[4].members[team[4].memberCount] = i;
            team[4].score = team[4].score + parseInt(mac[i].MACscoreToday);
            team[4].memberCount++;
            break;
          }

          case 'ap':{
            team[5].members[team[5].memberCount] = i;
            team[5].score = team[5].score + parseInt(mac[i].MACscoreToday);
            team[5].memberCount++;
            break;
          }
        }
      }
      return team
    })
}

function displayRank(x){
  switch(x){
    case 1:{
      fetchMac()
          .then((mac)=>{
              assignData(mac);
          });
      break;
    }

    case 3:{
      fetchKarma()
          .then((karma)=>{
            assignKarma(karma);
          });
      break;
    }
  }
}



displayRank(1);

function assignData(Data) {
  rankList.innerHTML ="";
  top10Div.innerHTML = "";
  var data = Data;
  var i, j, n, temp;
  n = data.length;

  // Sort the data based on scores in descending order
  data.sort((a, b) => b.MACscoreToday - a.MACscoreToday);
  console.log("Data Sorting Success!!");

  // Assign ranks to students with the same score
  var rank = 1;
  for (i = 0; i < n; i++) {
    if (i > 0 && data[i].MACscoreToday !== data[i - 1].MACscoreToday) {
      rank++;
    }
    data[i].rank = rank;
  }
  console.log("Rank assigning Succes!!");

  switch(data[0].rank){
    case 1:{
      var rankImgSrc1 = "assets/img/firstCrown.png"; 
      var color1 = "text-first";
      break;
    }
    case 2:{
      var rankImgSrc1 = "assets/img/secondCrown.png"; 
      var color1 = "text-second";
      break;
    }
    case 3:{
      var rankImgSrc1 = "assets/img/thirdCrown.png"; 
      var color1 = "text-third";
      break;
    }
    default:{
      var rankImgSrc1 = "assets/img/defaultRank.png"; 
      var color1 = "text-light";
      break;
    }
  }

  switch(data[1].rank){
    case 1:{
      var rankImgSrc2 = "assets/img/firstCrown.png"; 
      var color2 = "text-first";
      break;
    }
    case 2:{
      var rankImgSrc2 = "assets/img/secondCrown.png"; 
      var color2 = "text-second";
      break;
    }
    case 3:{
      var rankImgSrc2 = "assets/img/thirdCrown.png"; 
      var color2 = "text-third";
      break;
    }
    default:{
      var rankImgSrc2 = "assets/img/defaultRank.png"; 
      var color2 = "text-light";
      break;
    }
  }

  switch(data[2].rank){
    case 1:{
      var rankImgSrc3 = "assets/img/firstCrown.png"; 
      var color3 = "text-first";
      break;
    }
    case 2:{
      var rankImgSrc3 = "assets/img/secondCrown.png"; 
      var color3 = "text-second";
      break;
    }
    case 3:{
      var rankImgSrc3 = "assets/img/thirdCrown.png"; 
      var color3 = "text-third";
      break;
    }
    default:{
      var rankImgSrc3 = "assets/img/defaultRank.png"; 
      var color3 = "text-light";
      break;
    }
  }

  top10Div.innerHTML = top10Div.innerHTML + `
        <div class="col-4 text-center d-flex flex-column justify-content-center align-items-center ${color2}">
          <img src="${rankImgSrc2}" alt="" class="firstRankPic">
          <p class="h3">#${data[1].rank}</p>
          <p class="overflow-auto text-nowrap w-100 no-scrollbar">${data[1].studentName}</p>
          <p class="en-Oxanium ls-1">${data[1].MACscoreToday}</p>
        </div>

        <div class="col-4 text-center d-flex flex-column justify-content-center align-items-center top-1  ${color1}">
            <img src="${rankImgSrc1}" alt="" class="firstRankPic pb-2">
            <p class="h2">#${data[0].rank}</p>
            <p class="overflow-auto text-nowrap w-100 no-scrollbar">${data[0].studentName}</p>
            <p class="en-Oxanium ls-1">${data[0].MACscoreToday}</p>
        </div>

        <div class="col-4 text-center d-flex flex-column justify-content-center align-items-center  ${color3} top-side">
            <img src="${rankImgSrc3}" alt="" class="firstRankPic">
            <p class="h3">#${data[2].rank}</p>
            <p class="overflow-auto text-nowrap w-100 no-scrollbar">${data[2].studentName}</p>
            <p class="en-Oxanium ls-1">${data[2].MACscoreToday}</p>
        </div>
      `

    for(i=3; i<data.length; i++)
    {
      switch(data[i].rank)
      {
          case 1: 
            {
                rankImgSrc = "assets/img/firstCrown.png"; color = "text-first";
                break;
                
            }
          case 2:
            {
              rankImgSrc = "assets/img/secondCrown.png"; color = "text-second";
              break;
              
            }
          case 3:
            {
              rankImgSrc = "assets/img/thirdCrown.png"; 
              color = "text-third";
              break;   
            }
          default: 
            {
                rankImgSrc = "assets/img/defaultRank.png";
                color = "text-light";
            }
        }
          rankList.innerHTML = rankList.innerHTML + 
          `
            <div class="text-light normalRankItem d-flex flex-row justify-content-between align-items-center normalRankBg px-2 py-1 hover-scale-2">
            <span class="d-flex flex-row justify-content-center align-items-center">
                    <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color} mr-4">#${data[i].rank} </p>
                    <img src="${rankImgSrc}" class="normalRankPic">
                  </span>
            <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
            <p class="normalRankScore my-auto">${data[i].MACscoreToday}</p>
          </div>
          `
    }
    checkRank.innerHTML = `
        <p class="h4 strong text-danger op-06 mt-5 en-iceland">Know Your Rank</p>
        <input class="my-auto mx-auto en-Oxanium" type="text" id="macRankId" placeholder="Enter Your MuId"> <button class="btn btn-outline-danger" onclick="generateMacRank()">GET</button>
        <div id="macRankCard"></div>
    `
    var macRankId = document.getElementById("macRankId");
    var macRankCard = document.getElementById("macRankCard");

}

function assignKarma(Data) {
  rankList.innerHTML ="";
  top10Div.innerHTML = "";
  var data = Data;
  var i, j, n, temp;
  n = data.length;

  // Sort the data based on scores in descending order
  data.sort((a, b) => b.Karma - a.Karma);
 
  console.log("Data Sorting Success!!");

  // Assign ranks to students with the same score
  var rank = 1;
  for (i = 0; i < n; i++) {
    if (i > 0 && data[i].Karma !== data[i - 1].Karma) {
      rank++;
    }
    data[i].rank = rank;
  }
  console.log("Rank assigning Succes!!");

  switch(data[0].rank){
    case 1:{
      var rankImgSrc1 = "assets/img/firstCrown.png"; 
      var color1 = "text-first";
      break;
    }
    case 2:{
      var rankImgSrc1 = "assets/img/secondCrown.png"; 
      var color1 = "text-second";
      break;
    }
    case 3:{
      var rankImgSrc1 = "assets/img/thirdCrown.png"; 
      var color1 = "text-third";
      break;
    }
    default:{
      var rankImgSrc1 = "assets/img/defaultRank.png"; 
      var color1 = "text-light";
      break;
    }
  }

  switch(data[1].rank){
    case 1:{
      var rankImgSrc2 = "assets/img/firstCrown.png"; 
      var color2 = "text-first";
      break;
    }
    case 2:{
      var rankImgSrc2 = "assets/img/secondCrown.png"; 
      var color2 = "text-second";
      break;
    }
    case 3:{
      var rankImgSrc2 = "assets/img/thirdCrown.png"; 
      var color2 = "text-third";
      break;
    }
    default:{
      var rankImgSrc2 = "assets/img/defaultRank.png"; 
      var color2 = "text-light";
      break;
    }
  }

  switch(data[2].rank){
    case 1:{
      var rankImgSrc3 = "assets/img/firstCrown.png"; 
      var color3 = "text-first";
      break;
    }
    case 2:{
      var rankImgSrc3 = "assets/img/secondCrown.png"; 
      var color3 = "text-second";
      break;
    }
    case 3:{
      var rankImgSrc3 = "assets/img/thirdCrown.png"; 
      var color3 = "text-third";
      break;
    }
    default:{
      var rankImgSrc3 = "assets/img/defaultRank.png"; 
      var color3 = "text-light";
      break;
    }
  }

  top10Div.innerHTML = top10Div.innerHTML + `
        <div class="col-4 text-center d-flex flex-column justify-content-center align-items-center ${color2}">
          <img src="${rankImgSrc2}" alt="" class="firstRankPic">
          <p class="h3">#${data[1].rank}</p>
          <p class="overflow-auto text-nowrap w-100 no-scrollbar">${data[1].Name}</p>
          <p class="en-Oxanium ls-1">${data[1].Karma}</p>
        </div>

        <div class="col-4 text-center d-flex flex-column justify-content-center align-items-center top-1  ${color1}">
            <img src="${rankImgSrc1}" alt="" class="firstRankPic pb-2">
            <p class="h2">#${data[0].rank}</p>
            <p class="overflow-auto text-nowrap w-100 no-scrollbar">${data[0].Name}</p>
            <p class="en-Oxanium ls-1">${data[0].Karma}</p>
        </div>

        <div class="col-4 text-center d-flex flex-column justify-content-center align-items-center  ${color3} top-side">
            <img src="${rankImgSrc3}" alt="" class="firstRankPic">
            <p class="h3">#${data[2].rank}</p>
            <p class="overflow-auto text-nowrap w-100 no-scrollbar">${data[2].Name}</p>
            <p class="en-Oxanium ls-1">${data[2].Karma}</p>
        </div>
      `

    for(i=3; i<data.length; i++)
    {
      switch(data[i].rank)
      {
          case 1: 
            {
                rankImgSrc = "assets/img/firstCrown.png"; color = "text-first";
                break;
                
            }
          case 2:
            {
              rankImgSrc = "assets/img/secondCrown.png"; color = "text-second";
              break;
              
            }
          case 3:
            {
              rankImgSrc = "assets/img/thirdCrown.png"; 
              color = "text-third";
              break;   
            }
          default: 
            {
                rankImgSrc = "assets/img/defaultRank.png";
                color = "text-light";
            }
        }
        if(data[i].Karma > 20){
            rankList.innerHTML = rankList.innerHTML + 
            `
              <div class="text-light normalRankItem d-flex flex-row justify-content-between align-items-center normalRankBg px-2 py-1 hover-scale-2">
              <span class="d-flex flex-row justify-content-center align-items-center">
                      <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color} mr-4">#${data[i].rank} </p>
                      <img src="${rankImgSrc}" class="normalRankPic">
                    </span>
              <p class="normalRankName my-auto text-nowrap">${data[i].Name}</p>
              <p class="normalRankScore my-auto">${data[i].Karma}</p>
            </div>
            `
        }
    }
    checkRank.innerHTML = `
        <p class="h4 strong text-danger op-06 mt-5 en-iceland">Know Your Rank</p>
        <input class="my-auto mx-auto en-Oxanium" type="text" id="macRankId" placeholder="Enter Your MuId"> <button class="btn btn-outline-danger" onclick="generateKarmaRank()">GET</button>
        <div id="macRankCard"></div>
    `
    var macRankId = document.getElementById("macRankId");
    var macRankCard = document.getElementById("macRankCard");

}

function generateMacRank() {
  var muId = macRankId.value;
  var flag = 0;
  fetchMac().then(data => {
    console.log("fetch mac = ");
    console.log(data)
        data.sort((a, b) => b.MACscoreToday - a.MACscoreToday);
        console.log("Data Sorting Success!!");

    // Assign ranks to students with the same score
      var rank = 1;
      for (i = 0; i < data.length; i++) {
          if (i > 0 && data[i].MACscoreToday !== data[i - 1].MACscoreToday) {
              rank++;
          }
          data[i].rank = rank;
      }
    console.log("Rank assigning Succes!!");

      for (i = 0; i < data.length; i++) {
          if (data[i].muid == muId) {
              switch(data[i].rank){
                  case 1: 
                  {
                      rankImgSrc = "assets/img/firstCrown.png"; color = "text-first";
                      break;
                      
                  }
                  case 2:
                    {
                      rankImgSrc = "assets/img/secondCrown.png"; color = "text-second";
                      break;
                      
                    }
                  case 3:
                    {
                      rankImgSrc = "assets/img/thirdCrown.png"; 
                      color = "text-third";
                      break;   
                    }
                  default: 
                    {
                        rankImgSrc = "assets/img/defaultRank.png";
                        color = "text-light";
                    }
              }
              macRankCard.innerHTML = `
                  <div class="text-light normalRankItem d-flex flex-row justify-content-between align-items-center normalRankBg px-2 py-1 my-3 bg-secondary">
                  <span class="d-flex flex-row justify-content-center align-items-center">
                    <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color} mr-3">#${data[i].rank} </p>
                    <img src="${rankImgSrc}" class="normalRankPic"></img>
                  </span>
                  <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
                  <p class="normalRankScore my-auto">${data[i].MACscoreToday}</p>
              </div>
            `;
              flag = 1;
              break;
          }
      }
      if (flag != 1) {
          macRankCard.innerHTML = `
              <p class="alert-danger small text-center strong my-3">Whoops! Your Data is NOT FOUND, contact Admin for more details!!</p>
          `;
      }
  });
}

function generateKarmaRank() {
  var muId = macRankId.value;
  var flag = 0;
  fetchKarma().then(data => {
    console.log("fetch karma = ");
    console.log(data)
        data.sort((a, b) => b.Karma - a.Karma);
        console.log("Data Sorting Success!!");

    // Assign ranks to students with the same score
      var rank = 1;
      for (i = 0; i < data.length; i++) {
          if (i > 0 && data[i].Karma !== data[i - 1].Karma) {
              rank++;
          }
          data[i].rank = rank;
      }
    console.log("Rank assigning Succes!!");

      for (i = 0; i < data.length; i++) {
          if (data[i].MuId == muId) {
              switch(data[i].rank){
                  case 1: 
                  {
                      rankImgSrc = "assets/img/firstCrown.png"; color = "text-first";
                      break;
                      
                  }
                  case 2:
                    {
                      rankImgSrc = "assets/img/secondCrown.png"; color = "text-second";
                      break;
                      
                    }
                  case 3:
                    {
                      rankImgSrc = "assets/img/thirdCrown.png"; 
                      color = "text-third";
                      break;   
                    }
                  default: 
                    {
                        rankImgSrc = "assets/img/defaultRank.png";
                        color = "text-light";
                    }
              }
              macRankCard.innerHTML = `
                  <div class="text-light normalRankItem d-flex flex-row justify-content-between align-items-center normalRankBg px-2 py-1 my-3 bg-secondary">
                  <span class="d-flex flex-row justify-content-center align-items-center">
                    <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color} mr-3">#${data[i].rank} </p>
                    <img src="${rankImgSrc}" class="normalRankPic"></img>
                  </span>
                  <p class="normalRankName my-auto text-nowrap">${data[i].Name}</p>
                  <p class="normalRankScore my-auto">${data[i].Karma}</p>
              </div>
            `;
              flag = 1;
              break;
          }
      }
      if (flag != 1) {
          macRankCard.innerHTML = `
              <p class="alert-danger small text-center strong my-3">Whoops! Your Data is NOT FOUND, contact Admin for more details!!</p>
          `;
      }
  });
}