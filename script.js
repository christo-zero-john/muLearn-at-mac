var rankList = document.getElementById("rankList");
var top10Div = document.getElementById("top10Div");
var data, rankImgSrc, color;

fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac")
  .then((res) => res.json())
  .then((Data) => {
    assignData(Data);
    console.log("Sheet fetc and Data assigning : Success!!")
  });

function assignData(Data) {
  var data = Data;
  var i, j, n, temp;
  n = data.length;

  // Sort the data based on scores in descending order
  data.sort((a, b) => b.score - a.score);
  console.log("Data Sorting Success!!");

  // Assign ranks to students with the same score
  var rank = 1;
  for (i = 0; i < n; i++) {
    if (i > 0 && data[i].score !== data[i - 1].score) {
      rank++;
    }
    data[i].rank = rank;
  }
  console.log("Rank assigning Succes!!");
  console.log("Final Data: " + data);

  for (i = 0; i < data.length; i++) {

    if(i>=0 && i<=9){
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
      <div class="col-5 col-md-3 rankItemTop text-center  d-flex flex-column justify-content-around align-items-center mx-2 firstRank">
            <div>
                <img src="${rankImgSrc}" alt="" class="firstRankPic mt-3">
                <p class=" d-block display-3 en-sirin  z-3 ${color}">#${data[i].rank}</p>
            </div>
            <div class="mt-4">
                <p class="en-Oxanium h4 text-nowrap text-info">${data[i].studentName}</p>
                <p class="en-Oxanium h4 topRankScore p-1 px-3">${data[i].score}</p>
            </div>
        </div>
      
      `
    }

    else{
          rankList.innerHTML = rankList.innerHTML + 
          `
            <div class="text-light normalRankItem d-flex flex-row justify-content-around align-items-center normalRankBg px-2 py-1">
            <p class="rank my-auto h1 en-iceberg p-0 m-0">#${data[i].rank}</p>
            <img src="assets/img/defaultRank.png" class="normalRankPic"></img>
            <p class="normalRankName my-auto text-nowrap">${data[i].studentName}</p>
            <p class="normalRankScore my-auto">${data[i].score}</p>
          </div>
          `
    }
  }
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