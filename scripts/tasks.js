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
        // console.log(tasks) https://learn.mulearn.org/static/media/freecodecamp.080636d05280aa48d82c43b7ad4ba83e.svg
        for(x in tasks){
                content += `
            <div class="col-md-5 d-flex flex-row justify-content-center align-items-center mx-1 mx-md-3 my-2 box-shadow py-3 taskItem" id="">
                <img class=" col-3 taskItemImg img-fluid p-3 mx-2" src="${tasks[x].img}" alt="">
                <div class="col-8 d-block" id="task">
                    <p class="h5 text-center" id="title">${tasks[x].title}</p>
                    <hr>

                    <p class="hashtag p-1 badge badge-light text-dark" id="">
                    ${tasks[x].hashtag}</p>

                    <div id="" class="text-dark">
                        <p class="badge p-0 col-5 text-left text-dark" id="">
                            <img class="op-09" src="/assets/img/macScoreImg.png" alt="" id="macScoreImg">
                            ${tasks[x].macScore}</p>
                        <p class="badge badge-light p-0 col-5 text-left" id="">
                            <img class="op-09" src="/assets/img/karmaPoints.svg" alt="" id="karmaPointsImg">
                            <span class="my-3 text-dark" id="">${tasks[x].karma}</span>
                        </p>
                    </div>

                    
                    <img class=" img-fluid mx-1 infoImg" src="/assets/img/info.png" alt="" onclick="printTaskDetails('${tasks[x].hashtag}')">

                    <img onclick="redirectTo('${tasks[x].link}','${x}')" class="mx-4 discordImg" src="https://img.shields.io/badge/View%20on%20discord-discord?style=social&logo=discord&logoColor=%230f00ff&color=%23bfdfcc
                    " alt="click to view task on discord" id="discordLink">
                </div>
            </div>
          `
        }
        taskDiv.innerHTML = content;
    }

function redirectTo(x, y){
    // here x = task.link and y = index position of task
    console.log(x)
    console.log(y)
    if(x == 'nil'){
        modalDiv.show();
        modalBody.innerHTML = `
        <div id="">
            <p class="fs-4" id="">${tasks[y].title}</p>
            <p class="p" id="">${tasks[y].title} is not a Discord task. This task is created by Mar Augusthinose college campus chapter and is only applicable for students of our college. All tasks with hashtag starting with <mark>#mac</mark> is created by our college. Also these tasks does not have any karma points as they are not from official mulearn. We implemented <mark>MAC SCORE </mark> as a scoring system for tasks from our college.</p> <br>

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

function printTaskDetails(x){
    // here x is hashtag of a task
    getTaskByHashtag(x);
}


function getTaskByHashtag(x){
    // here x is hashtag of a task
    // console.log(tasks)
    for(y in tasks){
        if(tasks[y].hashtag == x){
            modalDiv.show();
            document.getElementById("modalTitle").innerHTML = tasks[y].title;
            modalBody.innerHTML =`
            <div id="">
            <p class="fs-4" id="">${tasks[y].title}</p>
            <p class="p" id="">${tasks[y].description}</p> <br>

            <div id="" class="card p-3 bg-secondary text-light">
                <p class="" id="">Task Name: ${tasks[y].title}</p>
                <p class="" id="">Hashtag: ${tasks[y].hashtag}</p>
                <p class="" id="">Mac Score: ${tasks[y].macScore}</p>
                <p class="" id="">Karma Points: ${tasks[y].karma}</p>
            </div>
        </div>
            `
        }
    }
}
