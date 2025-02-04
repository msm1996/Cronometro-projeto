//setTimeout(function () {
//alert("executei")
//}, 3000);
//executa uma vez//



//let number = 0

//setInterval(() => {
//console.log(number++)
//},1000);
//executa infinitas vezes

// clearInterval -> vai pausar o setInterval

let number = 0
let cron
let h1 = document.querySelector("h1")

function start() {

    cron = setInterval(function () {
        number++
        h1.innerHTML = number

    }, 1000)
}

function Stop() {
    clearInterval(cron)
}




