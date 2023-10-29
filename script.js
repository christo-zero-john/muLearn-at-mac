var rankList = document.getElementById("rankList");
var data;
fetch(
    "https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac"
  )
    .then((res) => res.json())
    .then((Data) => {
      assignData(Data);
      });

function assignData(Data){
  var data = Data;
  var large, i, j, lloc,n ,temp;
  n = data.length;
    
    console.log(data);

    for(i=0; i<n; i++){
        large = data[i];
        lloc = i;
        for(j=i+1; j<n; j++){
          if(data[j].score >= large.score){
            large = data[j];
            lloc = j;
          }
        }
        if(lloc!=i){
          temp = data[lloc];
          data[lloc] = data[i];
          data[i] = temp;
        }
    }



    for(i=0; i<data.length; i++){
      rankList.innerHTML = rankList.innerHTML + `
          <div class="rankItem d-flex flex-row justify-content-around align-items-center text-success pt-2 minw-25 py-md-3">
                      <div class="d-flex flex-column">
                            <p class="h5 ls-l fw-400  rank">Rank</p>
                            <div class="btn btn-outline-light">${i+1}</div>
                      </div>
                        <p class="text-left p fw-400 text-light" id="name">${data[i].studentName}</p>
                        <div class="d-flex flex-column">
                            <p class="text-warning score" >MAC Score</p>
                            <div class="btn btn-outline-light">${data[i].score}</div>
                        </div>
                    </div>
                    <hr class="bg-dark">
      `;
    }
}

