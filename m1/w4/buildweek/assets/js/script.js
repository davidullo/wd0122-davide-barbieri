// SLIDER ___________________________________________________________________


let slider = document.querySelector('#slider')
let sliderImg = document.querySelector('.slider-img')
let width = -(sliderImg.width)

let fineSlider = width * 7

let margin = 0
let currentMargin = 0


if (screen.width < 480) {
    fineSlider = width * 7
}
if (screen.width > 479) {
    fineSlider = width * 6
}
if (screen.width > 769) {
    width += 20
    fineSlider = width * 5
}
if (screen.width > 979) {
    width -= 30
    fineSlider = width * 4
}


function forward() {
    slider.style.marginLeft = currentMargin + width + 'px'
    currentMargin = eval((slider.style.marginLeft).replace('px', ''))

    if (currentMargin < fineSlider) {
        console.log('fine');
        console.log(-fineSlider);
        slider.style.marginLeft = 0 + 'px'
        return currentMargin = 0
    }

}

/* ------- ANIMAZIONI GENERALI ------ */

window.addEventListener("scroll", function (e) {
    var animazioneGenerale = this.scrollY
    var s1 = document.querySelector(".about-us").offsetTop;
    // console.log(s1)
    var s2 = document.querySelector("#blog").offsetTop - 200;
    var s3 = document.querySelector("#menu").offsetTop - 200;
    var s4 = document.querySelector("#newsletter").offsetTop - 200;
    var s5 = document.querySelector("#separazione").offsetTop - 200;

    if (animazioneGenerale < s1) {
        document.getElementsByClassName("animaz")[0].classList.remove("animaz")
        document.querySelector(".about-us").classList.add("animaz")
        console.log("animazione about-us")

    }
    if (animazioneGenerale >= s1) {
        document.getElementsByClassName("animaz")[0].classList.remove("animaz")
        document.querySelector("#menu").classList.add("animaz")
        console.log("#menu")
    }
    if (animazioneGenerale >= s2) {
        document.getElementsByClassName("animaz")[0].classList.remove("animaz")
        document.querySelector("#newsletter").classList.add("animaz")
    }
    // if (animazioneGenerale >= s3) {
    //     document.getElementsByClassName("animaz")[0].classList.remove("animaz")
    //     document.getElementsByClassName("")[3].classList.add("animaz")
    // }
    // if (animazioneGenerale >= s4) {
    //     document.getElementsByClassName("animaz")[0].classList.remove("animaz")
    //     document.getElementsByClassName("brie")[4].classList.add("animaz")
    // }
    // if (animazioneGenerale >= s5) {
    //     document.getElementsByClassName("animaz")[0].classList.remove("animaz")
    //     document.getElementsByClassName("brie")[5].classList.add("animaz")
}
)