const SLIDER = document.querySelector('#slider')
let width = document.body.clientWidth
currentMargin = SLIDER.style.marginLeft


function forward() {
    if (width < 480) {
        currentMargin += 'calc(-100vw - 10px)'
    }
    if (width > 479 && width < 768) {
        SLIDER.style.marginLeft += 'calc(-50vw - 10px)'
    }
}

