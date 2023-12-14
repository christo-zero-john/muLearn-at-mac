var spreadsheet_id = '1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo'; 

var taskDiv = document.getElementById("tasksDiv");
var modalBody = document.getElementById("modalBody");
let modalDiv = new bootstrap.Modal(document.getElementById('modalDiv'), {});
var tasks;

fetch(`https://opensheet.elk.sh/${spreadsheet_id}/tasks`)
    .then(res=>res.json())
    .then((tasks)=>{
        console.log(tasks)
        initialize(tasks);
    })

function initialize(x){
        tasks = x
        var content = "";
        x = 0;
        console.log(tasks)
        for(x in tasks){
                content += `
            <div class="d-flex flex-row justify-content-center align-items-center mx-3 my-2 box-shadow py-3 taskItem" id="">
                <img class="col-3 taskItemImg op-07" src="https://learn.mulearn.org/static/media/freecodecamp.080636d05280aa48d82c43b7ad4ba83e.svg" alt="">
                <div class="col-8 d-block" id="task">
                    <p class="h3 text-center" id="title">${tasks[x].title}</p>

                    <p class="hashtag p-1 small" id="">${tasks[x].hashtag}</p>

                    <p class="description" id="">${tasks[x].description}</p>

                    <div id="" class="text-center">
                        <p class="btn macScore p-0 col-5" id="">
                            <img class="op-09" src="/assets/img/macScoreImg.png" alt="" id="macScoreImg">
                            ${tasks[x].macScore}</p>
                        <p class="small btn karmaPoints p-0 col-5" id="">
                            <img class="op-09" src="/assets/img/karmaPoints.svg" alt="" id="karmaPointsImg">
                            <span class="my-3 small" id="">${tasks[x].karma}</span>
                        </p>
                    </div>

                    <a href="##" class="d-block small text-center" id="" onclick="redirectTo('${tasks[x].link}','${x}')"><img class="img-fluid wd-10" src="https://app.mulearn.org/assets/discordicon-26d0c26a.webp" alt="" id="discordLink"><span class="">View in Discord</span></a>
                </div>
            </div>
          `
        }
        taskDiv.innerHTML = content;
    }

function redirectTo(x, y){
    console.log(x)
    console.log(x)
    if(x == 'nil'){
        modalDiv.show();
        modalBody.innerHTML = `
        <div id="">
            <p class="fs-4" id="">${tasks[y].title}</p>
            <p class="p" id="">${tasks[y].title} is not a Discord task. This task is created by Mar. Augusthinose college and is only applicable for students of our college. All tasks with hashtag starting with <mark>#mac</mark> is created by our college. Also these tasks does not have any karma points as they are not from official mulearn.</p> <br>

            <div id="" class="card p-3 bg-secondary text-light">
                <p class="" id="">Task Name: ${tasks[y].title}</p>
                <p class="" id="">Hashtag: ${tasks[y].hashtag}</p>
                <p class="" id="">Mac Score: ${tasks[y].macScore}</p>
            </div>
        </div>
        `
    }
    else{
        window.location.href = x;
    }
}