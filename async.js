const timeId = setTimeout(changeTime, 3000)

function changeTime(){
    console.log('Timeout')
}
console.log(timeId)