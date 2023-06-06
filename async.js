const timeId = setTimeout(changeTime, 3000)

function changeTime(){
    console.log('Timeout')
}
console.log(timeId)


function callbackAn(callback){
    if(typeof callback === 'function')
    setTimeout (() => {
        callback();
        console.log('Callback is displayed after 3 seconds');
    }, 3000);
};

function displayAn(){
    console.log('Hello');
}

callbackAn(displayAn);

const num1 = 1;
const num2 = 10;

for(let i = num1; i < num2; i++){
    setTimeout(() => console.log(i), i * 1000);
}

const num3 = 1;
const num4 = 10;
let i = num3;

const intervalId = setInterval(() => {
    console.log(i++);
    if(i === num4 + 1)
    clearInterval(intervalId);
}, 1000);

let fir1 = 10;
let fir2 = 1;

for(let i = fir1; i> fir2; i--){
    setTimeout(console.log, (fir1 - i) * 1000, i);
}