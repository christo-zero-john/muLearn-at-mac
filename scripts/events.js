var latestEvents = document.getElementById('latestEvents');
var muEvents = document.getElementById('muEvents');var macEvents = document.getElementById('macEvents');
let modalDiv = new bootstrap.Modal(document.getElementById('modalDiv'), {});
var modalBody = document.getElementById('modalBody');

var spreadsheet_id = '1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo'; //mulearn data google spreadsheet id

var activities;

fetch(`https://opensheet.elk.sh/${spreadsheet_id}/activities`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        initialize(data)
    })

function initialize(data){
    muEvents.innerHTML = `
    `
    activities = data;
    for(x in data){
        if(data[x].source == 'mulearn'){
            muEvents.innerHTML += `
                <div class="m-2 eventItem card col-5 col-md-3 small">
                <img class="w-10 m-0 p-0 eventItemImg card-header alert alert-success" src="/assets/img/events/${data[x].image}" alt="" class="">

                <p class="overflow-auto no-scrollbar card-footer py-auto en-iceberg  bg-success m-0  text-light fs-5 text-center text-nowrap">
                <img class=" img-fluid mx-1 infoImg" src="/assets/img/info.png" alt="" onclick="popEventdetails('${data[x].hashtag}')">

                ${data[x].title}
                    
                </p>
            </div>
            `
        }

        if(data[x].source == 'mac'){
            macEvents.innerHTML += `
                <div class="m-2 eventItem card col-5 col-md-3 small">
                <img class="w-10 m-0 p-0 eventItemImg card-header alert alert-success" src="/assets/img/events/${data[x].image}" alt="" class="">
                
                <p class="overflow-auto no-scrollbar card-footer p-auto en-iceberg  bg-success m-0  text-light fs-5 text-center text-nowrap">
                <img class=" img-fluid mx-1 infoImg" src="/assets/img/info.png" alt="" onclick="popEventdetails('${data[x].hashtag}')">
                
                ${data[x].title}
                    
                </p>
            </div>
            `
        }
    }
}

function popEventdetails(hashtag){
    console.log(hashtag)
    for(x in activities){
        if(activities[x].hashtag == hashtag){
            modalBody.innerHTML = `
                <p class="eventTitle">
                <span class="mark fw-600 fs-5"> Title</span> ${activities[x].title}</p>
                <p class="eventHashtag">
                <span class="mark fw-600 fs-5"> Hashtag</span> ${activities[x].hashtag}</p>
                <p class="eventSource">
                <span class="mark fw-600 fs-5"> Held By:</span> ${activities[x].source}</p>
                <p class="eventDescription">
                <span class="mark fw-600 fs-5"> Description: </span>${activities[x].description}</p>
                <p class="eventStartDate">
                <span class="mark fw-600 fs-5"> Announced On:  </span>${activities[x].startedOn}</p>
                <p class="eventEndDate">
                <span class="mark fw-600 fs-5"> End date: </span>${activities[x].deadline}</p>
                <kbd class="eventMacScore">MAC Score: ${activities[x].macScore}</kbd>
                <kbd class="badge badge-dark eventKarmaPoints">Karma Points: ${activities[x].karmaPoints}</kbd>
                
            `
            modalDiv.show()
        }
    }
}