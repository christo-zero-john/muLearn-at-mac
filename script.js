var rankList = document.getElementById("rankList");
var top10Div = document.getElementById("top10Div");
var macRankId = document.getElementById("macRankId");
var macRankCard = document.getElementById("macRankCard");
var data;

fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac")
  .then((res) => res.json())
  .then((Data) => {
    assignData(Data);
    console.log("Sheet fetch and Data assigning : Success!!")
  });



function assignData(Data) {
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
      var color1 = "text-warning";
      break;
    }
    case 2:{
      var rankImgSrc1 = "assets/img/secondCrown.png"; 
      var color1 = "text-silver";
      break;
    }
    case 3:{
      var rankImgSrc1 = "assets/img/thirdCrown.png"; 
      var color1 = "text-bronze";
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
      var color2 = "text-warning";
      break;
    }
    case 2:{
      var rankImgSrc2 = "assets/img/secondCrown.png"; 
      var color2 = "text-silver";
      break;
    }
    case 3:{
      var rankImgSrc2 = "assets/img/thirdCrown.png"; 
      var color2 = "text-bronze";
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
      var color3 = "text-warning";
      break;
    }
    case 2:{
      var rankImgSrc3 = "assets/img/secondCrown.png"; 
      var color3 = "text-silver";
      break;
    }
    case 3:{
      var rankImgSrc3 = "assets/img/thirdCrown.png"; 
      var color3 = "text-bronze";
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
                rankImgSrc = "assets/img/firstCrown.png"; color = "text-warning";
                break;
                
            }
          case 2:
            {
              rankImgSrc = "assets/img/secondCrown.png"; color = "text-silver";
              break;
              
            }
          case 3:
            {
              rankImgSrc = "assets/img/thirdCrown.png"; 
              color = "text-bronze";
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
            <div class="text-light normalRankItem d-flex flex-row justify-content-between align-items-center normalRankBg px-2 py-1">
            <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color}">#${data[i].rank}</p>
            <img src="${rankImgSrc}" class="normalRankPic"></img>
            <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
            <p class="normalRankScore my-auto">${data[i].MACscoreToday}</p>
          </div>
          `
    }

}
// currently working end

function generateMacRank() {
  var muId = macRankId.value;
  var flag = 0;
  fetchMacScoreData().then(data => {
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
                      rankImgSrc = "assets/img/firstCrown.png"; color = "text-warning";
                      break;
                      
                  }
                  case 2:
                    {
                      rankImgSrc = "assets/img/secondCrown.png"; color = "text-silver";
                      break;
                      
                    }
                  case 3:
                    {
                      rankImgSrc = "assets/img/thirdCrown.png"; 
                      color = "text-bronze";
                      break;   
                    }
                  default: 
                    {
                        rankImgSrc = "assets/img/defaultRank.png";
                        color = "text-light";
                    }
              }
              macRankCard.innerHTML = `
                  <div class="text-light normalRankItem d-flex flex-row justify-content-around align-items-center normalRankBg px-2 py-1 my-3 bg-secondary">
                  <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color}">#${data[i].rank}</p>
                  <img src="${rankImgSrc}" class="normalRankPic"></img>
                  <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
                  <p class="normalRankScore my-auto">${data[i].MACscoreToday}</p>
              </div>`;
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

function fetchKarmaPoints(){
    return fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac")
        .then((res) => res.json())
        .then((Data) => {
            console.log("return : Success!!");
            return Data;
        });
}

function fetchMacScoreData() {
  return fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac")
      .then((res) => res.json())
      .then((Data) => {
          console.log("return : Success!!");
          return Data;
      });
}


