let m = 0;
let s = 0;

let timer = setInterval(function () {
    if (s < 60) {
        s++;
    } else {
        s = 0;
        m++
    }
    console.log(m);
    console.log(s);
}, 1000)

let bottone = document.querySelector('button')
bottone.addEventListener('click', function () {
    clearInterval(timer)
    console.log(now.getMinutes() + ' ' + now.getSeconds())
})