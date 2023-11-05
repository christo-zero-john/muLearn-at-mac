var rankList = document.getElementById("rankList");
var top10Div = document.getElementById("top10Div");
var macRankId = document.getElementById("macRankId");
var macRankCard = document.getElementById("macRankCard");
var data, rankImgSrc, color;

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
  data.sort((a, b) => b.MACscore - a.MACscore);
  console.log("Data Sorting Success!!");

  // Assign ranks to students with the same score
  var rank = 1;
  for (i = 0; i < n; i++) {
    if (i > 0 && data[i].MACscore !== data[i - 1].MACscore) {
      rank++;
    }
    data[i].rank = rank;
  }
  console.log("Rank assigning Succes!!");

  for (i = 0; i < data.length; i++) {

    if(i>=0 && i<=2){
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
                color = "text-info";
            }
      }
      top10Div.innerHTML = top10Div.innerHTML + `
      <div class="col-md-4 col-8 rankItemTop text-center  d-flex flex-column justify-content-around align-items-center mx-2 firstRank w-fit">
            <div>
                <img src="${rankImgSrc}" alt="" class="firstRankPic mt-3">
                <p class=" d-block display-3 en-sirin  z-3 ${color}">#${data[i].rank}</p>
            </div>
            <div class="mt-4">
                <p class="en-Oxanium h4 text-nowrap text-info">${data[i].studentName}</p>
                <p class="en-Oxanium h4 topRankScore p-1 px-3">${data[i].MACscore}</p>
            </div>
        </div>
      
      `
    }

    else{
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
                color = "text-info";
            }
        }
          rankList.innerHTML = rankList.innerHTML + 
          `
            <div class="text-light normalRankItem d-flex flex-row justify-content-between align-items-center normalRankBg px-2 py-1">
            <p class="rank my-auto h3 en-iceberg p-0 m-0">#${data[i].rank}</p>
            <img src="${rankImgSrc}" class="normalRankPic"></img>
            <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
            <p class="normalRankScore my-auto">${data[i].MACscore}</p>
          </div>
          `
    }
  }
}


function generateMacRank() {
  var muId = macRankId.value;
  var flag = 0;
  fetchMacScoreData().then(data => {
        data.sort((a, b) => b.MACscore - a.MACscore);
        console.log("Data Sorting Success!!");

    // Assign ranks to students with the same score
      var rank = 1;
      for (i = 0; i < data.length; i++) {
          if (i > 0 && data[i].MACscore !== data[i - 1].MACscore) {
              rank++;
          }
          if(data[i].score>0){
            data[i].rank = rank;
          }
          else{
            data[i].rank = 0;
          }
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
                        color = "text-info";
                    }
              }
              macRankCard.innerHTML = `
                  <div class="text-light normalRankItem d-flex flex-row justify-content-around align-items-center normalRankBg px-2 py-1 my-3">
                  <p class="rank my-auto h3 en-iceberg p-0 m-0 ${color}">#${data[i].rank}</p>
                  <img src="${rankImgSrc}" class="normalRankPic"></img>
                  <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
                  <p class="normalRankScore my-auto">${data[i].MACscore}</p>
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


// old rank List item
// `
//           <div class="rankItem d-flex flex-row justify-content-around align-items-center text-success pt-2 minw-25 py-md-3">
//             <div class="d-flex flex-column en-seriel">
//               <p class="h5 ls-l rank en-sirin">Rank</p>
//               <div class="btn btn-outline-light en-iceberg">${data[i].rank}</div>
//             </div>
//             <p class="text-left p fw-400 text-light en-oxanium" id="name">${data[i].studentName}</p>
//             <div class="d-flex flex-column">
//               <p class="text-warning score en-iceland h5">MAC Score</p>
//               <div class="btn btn-outline-light en-iceberg">${data[i].score}</div>
//             </div>
//           </div>
//           <hr class="bg-dark">
//         `;