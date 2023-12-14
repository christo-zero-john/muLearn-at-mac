// api link: https://api.steinhq.com/v1/storages/6576ec2ac5ad5604ce331408

var spreadsheet_id = '1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo'; //mulearn data google spreadsheet id

// initializing stein api
const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6576ec2ac5ad5604ce331408"
  );

// variable declarations
var students, tasks, addData = [
];    //stores student ,tasks data, and data to be added

var newData; // Strores an isntance of new data. This is appended to add data array when add button is pressed

// {
//     muid:"",
//     name:"",
//     completed:new Array,
//     mac:0,
//     karma:0
// }

var studentList = document.getElementById("studentList"); // datalist element for tasks Students
var taskList = document.getElementById("taskList");  // datalist element for tasks
var infoDiv = document.getElementById("info"); // Information div. Updates when a student or task is selected in input
var getStudent = document.getElementById("studentName"); // student name input field
var getTask = document.getElementById("taskId"); // task input field
var dataTable = document.getElementById("dataTable"); // contains data to be added to the sheet



// fetch student data from mulearn data google sheet*(mac tab) and initialize student list. Using opensheets.lk
fetch(`https://opensheet.elk.sh/${spreadsheet_id}/mac`)
    .then(res=>res.json())
    .then((res)=>{
        console.log("Fetch students success")
        students = JSON.parse(res[0].data);
        setStudentList();
    })

// fetch task data from mulearn data google sheet*(tasks tab) and initialize task list. Using opensheets.lk
fetch(`https://opensheet.elk.sh/${spreadsheet_id}/tasks`)
    .then(res=>res.json())
    .then((res)=>{
        console.log("Fetch tasks success")
        tasks = res;
        setTaskList();
    })

// set student list and datalist for student input
function setStudentList(){
    console.log(students)
    // console.log(JSON.stringify(students),JSON.stringify(students).length)
    for(x in students){
        studentList.innerHTML +=`
        <option value="${students[x].muid}">${students[x].muid}</option>
        `
    }
}

// set task list and datalist for tasks input
function setTaskList(){
    console.log(tasks)
    for(x in tasks){
        taskList.innerHTML +=`
        <option value="${tasks[x].hashtag}">${tasks[x].hashtag}</option>
        `
    }
}


// When a student is choosen, the muid and corresponding name is displayed in the infoDiv
getStudent.addEventListener('input', function(event){
    infoDiv.innerHTML = `
        <p class="" id="">${getStudent.value} : ${getStudentById(getStudent.value).name}</p>
    `
    if(getStudentById(getStudent.value) != 'No such Student Found'){
        infoDiv.innerHTML += `
        <button class="btn btn-success w-75" id="" onclick="printCompletedTasks(getStudent.value)">View Completed Tasks of <br> ${getStudentById(getStudent.value).name}</button>

        `
    }
})

// When a tak is choosen, the hashtag and corresponding title is displayed in the infoDiv
getTask.addEventListener('input', function(event){
    infoDiv.innerHTML = `
        <p class="" id="">${getTask.value} : ${getTaskByHashtag(getTask.value).title}</p>
    
    `
})

// reruen student object from student id. Contains all student related data
function getStudentById(x){
    for(i in students){
        if(students[i].muid == x){
            console.log(students[i])
            return students[i]
        }
    }
    return {name:'No such Student Found'}
}

// returns a task object from hashtag. Contains all task related data
function getTaskByHashtag(x){
    for(i in tasks){
        if(tasks[i].hashtag == x){
            return tasks[i]
        }
    }
    return {title:'Task does Not Exists!'}
}

function addStudent()
{
    console.log("AddStudent triggered")
    var x, flag = 0;
    console.log("task value",getTask.value)
    newData = {
        muid:getStudent.value,
        name:getStudentById(getStudent.value).name,
        completed: getTask.value
    }
    
    for(x in addData)
    {
        console.log("Checking for name in new data list");
        if(addData[x].name == newData.name)
        {
            console.log("name found in new data list at ",x)
            flag = 1;
            break;
        }
        
    }
    if(flag == 1)
    {
        if(!addData[x].completed.includes(getTask.value) && !getStudentById(addData[x].muid).completed.includes(getTask.value))
        {
            addData[x].completed.push(newData.completed);
            console.log(`Added new task ${newData.completed} to task list of ${addData[x].name}`)
        }
    }
    else
    {
        addData.push(newData);
        console.log("New name pushed to new data list")
        if(!Array.isArray(addData[addData.length-1].completed))
        {
            addData[addData.length-1].completed = new Array();
            //             
            if(!getStudentById(addData[addData.length-1].muid).completed.includes(getTask.value)){
                addData[addData.length-1].completed.push(getTask.value);
                console.log(`New task ${addData[addData.length-1].completed[0]} added to the task list of ${addData[addData.length-1].name}`)
            }
            else{
                console.log(`${addData[addData.length-1].name} already completed this task ${getTask.value}`);
            }

            //             
        }
        else{
            infoDiv.innerHTML =`
            <p class="" id="">${newData.completed} is already marked a done for ${addData[x].name} and the score is also rewarded</p>
            `
        }
        
    }
    // console.log(newData)
    console.log(addData)
    displayDataTable()
}

function displayDataTable(){
    dataTable.innerHTML =`
        <tr class="table-row">
            <th>Name</th>
            <th>Completed Task</th>
            <th>Task Hashtag</th>
            <th>Score</th>
        </tr>
    `
    dataTable.style.display = 'block'
    for(x in addData){
        for(y in addData[x].completed){
            dataTable.innerHTML +=`
            <tr>
                <td>${addData[x].name}</td>
                <td>${getTaskByHashtag(addData[x].completed[y]).title}</td>
                <td>${getTaskByHashtag(addData[x].completed[y]).hashtag}</td>
                <td>+${getTaskByHashtag(addData[x].completed[y]).macScore}</td>
            </tr>    
        `
        }
    }
}

function submitSheet(){
    console.log("SubmitSheet triggered");
    generateDataToBeSubmitted();
    store.edit("mac",{
        search:{id: "students"},
        set:{data:JSON.stringify(students)}
    })
    addData = [];
    dataTable.innerHTML = ""
}

function generateDataToBeSubmitted(){
    for(x in students){
        for(y in addData){
            if(students[x].muid == addData[y].muid){
                students[x].completed +=',' + String(addData[y].completed)
            }
        }
    }
    setMacScore()
    console.log(students);
}

function setMacScore(){
    var score = 0;
    for(x in addData){
        for(y in addData[x].completed){
            score += parseInt(getTaskByHashtag(addData[x].completed[y]).macScore);
        }
        for(z in students){
            if(students[z].muid == addData[x].muid){
                students[z].mac += score;
                break;
            }
        }
        score = 0;
    }
    console.log(addData)
}

function getCompletedTasks(x){
    console.log(x)
    for(i in students){
        if(students[i].muid == x){
            console.log("success")
            return students[i].completed.split(',');
        }
    }
    return null;
}

function printCompletedTasks(x){
    var completed = getCompletedTasks(x);
    var printTaskTable = document.getElementById("printTaskTable");
    printTaskTable.innerHTML = `
    <p class="h5 text-left w-100" id="">Name: ${getStudentById(x).name}</p>
    <p class="small text-left w-100" id="">List of tasks already marked as completed</p>
    <p class="h5 text-left w-100" id="">Current MAC Score ${getStudentById(x).mac}</p>
    
    <tr>
        <th>Task Name</th>
        <th>Hashtag</th>
    </tr>`

    for(y in completed){
       if(y != 0){
            printTaskTable.innerHTML +=
            `
                <tr>
                    <td>${getTaskByHashtag(completed[y]).title}</td>
                    <td>${completed[y]}</td>
                </tr>
            `
       }
    }
}