var rankList = document.getElementById("rankList");
var data;

fetch("https://opensheet.elk.sh/16yJ9HR1f8UjrJDJQBSQcbsCLvoyuFZ2NOALxzk9pdvY/mac")
  .then((res) => res.json())
  .then((Data) => {
    assignData(Data);
  });

function assignData(Data) {
  var data = Data;
  var i, j, n, temp;
  n = data.length;

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (data[j].score === data[i].score) {
        // If scores are equal, compare names to maintain alphabetical order
        if (data[j].studentName < data[i].studentName) {
          temp = data[j];
          data[j] = data[i];
          data[i] = temp;
        }
      } else if (data[j].score > data[i].score) {
        temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }

  for (i = 0; i < data.length; i++) {
    rankList.innerHTML = rankList.innerHTML + `
      <div class="rankItem d-flex flex-row justify-content-around align-items-center text-success pt-2 minw-25 py-md-3">
        <div class="d-flex flex-column en-seriel">
          <p class="h5 ls-l rank en-sirin">Rank</p>
          <div class="btn btn-outline-light en-iceberg">${i + 1}</div>
        </div>
        <p class="text-left p fw-400 text-light en-oxanium" id="name">${data[i].studentName}</p>
        <div class="d-flex flex-column">
          <p class="text-warning score en-iceland h5">MAC Score</p>
          <div class="btn btn-outline-light en-iceberg">${data[i].score}</div>
        </div>
      </div>
      <hr class="bg-dark">
    `;
  }
}
