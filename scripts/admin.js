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
var studentList = document.getElementById("studentList"); // datalist element for tasks Students
var taskList = document.getElementById("taskList");  // datalist element for tasks
var infoDiv = document.getElementById("info"); // Information div. Updates when a student or task is selected in input
var getStudent = document.getElementById("studentName"); // student name input field
var getTask = document.getElementById("taskId"); // task input field
var dataTable = document.getElementById("dataTable"); // contains data to be added to the sheet
var addDataBtn = document.getElementById("addData");
var submitDataBtn = document.getElementById("submitData");

// fetch student data from mulearn data google sheet*(mac tab) and initialize student list. Using opensheets.lk
fetch(`https://opensheet.elk.sh/${spreadsheet_id}/mac`)
    .then(res=>res.json())
    .then((res)=>{
        console.log("Fetch students success")
        console.log(res)
        setStudentList(res);
        
    })

// fetch task data from mulearn data google sheet*(tasks tab) and initialize task list. Using opensheets.lk
fetch(`https://opensheet.elk.sh/${spreadsheet_id}/tasks`)
    .then(res => res.json())
    .then((res)=>{
        console.log("Fetch tasks success")
        tasks = res;
        setTaskList();
    })

// set student list and datalist for student input
function setStudentList(res){
    // console.log(res)
    students = ""
    for(x in res){
        if(res[x].data !="." ){
            students += res[x].data;
        }
    }
    // console.log(students.length)
    students = JSON.parse(students);
    students = setCompletedTasks(students);
    console.log(students);
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
    if(getStudentById(getStudent.value).flag != 0){
        infoDiv.innerHTML += `
            <button class="btn btn-success d-block col-11 m-auto" id="" onclick="printCompletedTasks(getStudent.value)">View Completed Tasks of <br> ${getStudentById(getStudent.value).name}</button>
        `
    }
    
    // enable add data button
    if(getTaskByHashtag(getTask.value).flag != 0 && getStudentById(getStudent.value).flag != 0){
        addDataBtn.disabled = false;
    }
    else{
        addDataBtn.disabled = true;
    }
})

// When a tak is choosen, the hashtag and corresponding title is displayed in the infoDiv
getTask.addEventListener('input', function(event){
    infoDiv.innerHTML = `
        <p class="" id="">${getTask.value} : ${getTaskByHashtag(getTask.value).title}</p>
    
    `
    if(getStudentById(getStudent.value).flag != 0){
        infoDiv.innerHTML += `
            <button class="btn btn-success d-block col-11 m-auto" id="" onclick="printCompletedTasks(getStudent.value)">View Completed Tasks of <br> ${getStudentById(getStudent.value).name}</button>
        `
    }
    if(getTaskByHashtag(getTask.value).flag != 0 && getStudentById(getStudent.value).flag != 0){
        addDataBtn.disabled = false;
    }
    else{
        addDataBtn.disabled = true;
    }
})

// reruen student object from student id. Contains all student related data
function getStudentById(x){
    for(i in students){
        if(students[i].muid == x){
            // console.log(students[i])
            return students[i]
        }
    }
    return {name:`Student ${x} not Found`, flag:0}
}

// returns a task object from hashtag. Contains all task related data
function getTaskByHashtag(x){
    for(i in tasks){
        if(tasks[i].hashtag == x){
            // console.log(tasks[i])
            return tasks[i]
        }
    }
    return {title:`Task ${x} does Not Exists!`, flag:0}
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
        console.log("New name pushed to new data list",addData)
        if(!Array.isArray(addData[addData.length-1].completed))
        {
            addData[addData.length-1].completed = new Array();  
            // console.log(students)      
            if(!getStudentById(addData[addData.length-1].muid).completed.includes(getTask.value)){
                addData[addData.length-1].completed.push(getTask.value);
                console.log(`New task ${addData[addData.length-1].completed[0]} added to the task list of ${addData[addData.length-1].name}`)
                infoDiv.innerHTML = `
                <p class="" id="">New task ${addData[addData.length-1].completed[0]} added to the task list of ${addData[addData.length-1].name}</p>
            `
            getTask.value = ""
            }
            else{
                console.log(`${addData[addData.length-1].name} already completed this task ${getTask.value}`);
            }

            //             
        }
        // else{
        //     infoDiv.innerHTML =`
        //         <p class="" id="">${newData.completed} is already marked a done for ${addData[x].name} and the score is also rewarded</p>
        //     `
        // }
        
    }
    // console.log(newData)
    console.log(addData)
    displayDataTable();
    for(x in addData){
        if(addData[x].completed.length > 0){
            submitDataBtn.disabled = false;
        }
    }
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

function submitMacScoreToSheet(){
    // console.log("submitMacScoreToSheet triggered");
    var submitData = generateDataToBeSubmitted(students);
    // console.log(submitData.length)
    infoDiv.innerHTML = `
        <div class="alert  alert-success">
            Please wait while we submit the data
        </div>
    `
    addDataBtn.disabled = submitDataBtn.disabled = true;
    for(x in addData){
        if(addData[x].completed.length > 0){
            console.log("Wait a moment! Submitting Data to Google Spreadsheet")
            for(x in submitData){
                store.edit("mac",{
                    search:{id: `students${x}`},
                    set:{data: submitData[x]}
                })
                .then(res => {
                    console.log(res)
                    console.log("submitted data", x)
                })
                console.log("submitted data", x)
                if( x == 3){
                    break;
                }
            }
            console.log("submit data = ", submitData)
            for(i=0; i<4820; i++ ){
                store.edit("mac",{
                    search:{id: `students1`},
                    set:{data: submitData[0]}
                })
                .then(res => {
                    console.log(res)
                    console.log("submitted data", i)
                })
            }
        }
    }
    
    // for(x in submitData){
    //     console.log(submitData)
    // }
    
}

// var temp = new Array()
function generateDataToBeSubmitted(data){ // here data is the students object

    // Add newly completed tasks to corresponding students in students list. Here data refers to the students list
    for(x in data){
        for(y in addData){
            if(data[x].muid == addData[y].muid){
                data[x].completed = data[x].completed.concat(addData[y].completed);
            }
        }
    }
    console.log("new completed tasks added to students list",data)
    data = setMacScore(data) //set mac score for all completed tasks. Mac score is reassigned for all completed tasks including previous ones

    students = data; // update students list with new completed tasks and corresponding mac score

    data = JSON.stringify(data);   // convert object to a string to store in the sheet

    data = jsonStringToArrays(data, 49000); // if the length of data string is larger than 49000 we should make it an array of strings of length 49000 

    return data;    // return the data string


    // console.log(temp);
    // temp = jsonArraysToString(temp)
    // console.log(temp);
    // console.log(students);

}


function setMacScore(data){
    var score = 0;
    for(x in data){
        data[x].mac = 0;
        for(y in data[x].completed){
            console.log(getTaskByHashtag(data[x].completed[y]))
            data[x].mac += parseInt(getTaskByHashtag(data[x].completed[y]).macScore)
        }
    }
    console.log("setting mac score finished", data)
    return data;
}

function setCompletedTasks(data){ // data here is the students object
    // console.log(data)
    for(i in data){
        if(typeof(data[i].completed) == 'string')
        {
            data[i].completed = data[i].completed.split(',');
            data[i].completed.shift();
        }
    }
    return data
}

function printCompletedTasks(x){
    var completed = getStudentById(x).completed;
    var printTaskTable = document.getElementById("printTaskTable");
    printTaskTable.innerHTML = `
        <tr class="">
            <td colspan="3">
                Name: <span class="fw-700">${getStudentById(getStudent.value).name}</span>
            </td>
        </tr>
        <tr class="">
            <td colspan="3">
            Total Completed: <span class="fw-700">${completed.length}</span> <br>
            Current Mac Score: <span class="fw-700">${getStudentById(getStudent.value).mac}</span>
            </td>
        </tr>
        <tr>
            <td class="fw-500 small" colspan="2">
                List of all Completed Tasks
            </td>
        </tr>
        <tr>
            <th colspan="1">
                Task Name
            </th>
            <th colspan="1">
                Hashtag
            </th>
            <th colspan="1">
                Score
            </th>
        </tr>
    `

    for(y in completed){
        console.log(completed[y].title)
        printTaskTable.innerHTML +=
        `
            <tr>
                <td>${getTaskByHashtag(completed[y]).title}</td>
                <td>${completed[y]}</td>
                <td>${getTaskByHashtag(completed[y]).macScore}</td>

            </tr>
        `
    }
}

function jsonStringToArrays(x, y){
    var z = new Array();
    if(x.length > y){
        for(i=0; i < x.length; i += y){
            var substring = x.substring(i, i+y);
            z.push(Array(substring))
        }
        return(z)
    }
    else{
        return Array(x);
    }
    
}

function jsonArraysToString(x){
    var str = "";
    for(y in x){
        str += x[y];
    }
    return str;
}