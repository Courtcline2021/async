console.log('start');

const promise = new Promise((resolve, reject)=> {
    console.log(1)
});

console.log('end');

console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log(1)
    return resolve('completed')
})

promise
    .then(value => console.log(value))
    .finally(() => console.log('done'))

console.log('end')    