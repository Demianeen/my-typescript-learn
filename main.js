// const vehile = new Promise((resolve, reject) => {
//     const fullTank = true;

//     if (fullTank) {
//         resolve();
//     } else {
//         reject();
//     }
// })



// vehile.then(() => {
//     document.write("The tank is full. Have fun!")
// }).catch(() => {
//     document.write("The tank is empty!")
// })

let empty_tank = function(){
    return new Promise(function(resolve,reject){
        resolve("The car doesn't have enough fuel. ")
    })
}

let engine = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg + "The engine is over heating. ")
    })
}

let travel = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg + "The car is not safe for driving. ")
    })
}

empty_tank()
.then(function(result){
    return engine(result)
})
.then(function(result){
    return travel(result)
})
.then(function(result){
    console.log("Done! " + result)
})

