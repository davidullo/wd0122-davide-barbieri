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
