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
    data = Data;
    console.log(data);
    for(i=0; i<data.length; i++){
      rankList.innerHTML = rankList.innerHTML + `
          <div class="rankItem d-flex flex-row justify-content-around align-items-center text-success pt-2">
                      <div class="d-flex flex-column">
                            <p class="h5 ls-l fw-700 text-secondary">Rank</p>
                            <div class="btn btn-outline-light">${i+1}</div>
                      </div>
                        <p class="text-left p fw-400" id="name">${data[i].studentName}</p>
                        <div class="d-flex flex-column">
                            <p>Mac Score</p>
                            <div class="btn btn-outline-light">${data[i].score}</div>
                        </div>
                    </div>
                    <hr class="bg-dark">
      `;
    }
}

