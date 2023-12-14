if(!getStudentById(addData[addData.length-1].completed.includes(newData.completed))){
    addData[addData.length-1].completed.push(newData.completed)
}
console.log(!getStudentById(addData[addData.length-1].completed.includes(newData.completed)))