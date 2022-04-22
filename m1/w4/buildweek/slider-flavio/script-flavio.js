let n = 0;
function prossimaImmagine() {
    n++
    if (n > 4) {
        n = 0
    }
    // var p = 265 * n
    // document.getElementsByClassName("imgs")[0].style.transform = "translatex(" + p + "px)"
    nImmagine(n)
}

function nImmagine(x) {
    n = x
    document.getElementsByClassName("imgs")[0].style.transform = "translatex(" + (-265 * x) + "px)"

    // var i = 0
    // while (i < 8) {
    //     document.getElementsByClassName("dot")[i].classList.remove("active")
    //     i++
    // }

    document.querySelector(".dot.active").classList.remove("active")
    document.getElementsByClassName("dot")[x].classList.add("active")
}

/* -----NAV----- */

window.addEventListener("scroll", function (e) {
    let posizioneScroll = this.scrollY
    console.log("SCROLL POSITION", posizioneScroll);
    let s1 = document.getElementById("about-us").offsetTop - 200

    if (posizioneScroll < s1) {
        this.document.querySelectorAll("nav li")[1].style.borderBottom = "solid 1px orange"
    } else {
        this.document.querySelectorAll("nav li")[1].style.borderBottom = "none"
    }


    if (posizioneScroll >= s1 && < s2) {
        this.document.querySelectorAll("nav li")[1].style.borderBottom = "solid 1px orange"
    } else {
        this.document.querySelectorAll("nav li")[1].style.borderBottom = "none"
    }


    if (posizioneScroll >= s2 && < s3) {
        this.document.querySelectorAll("nav li")[1].style.borderBottom = "solid 1px orange"
    } else {
        this.document.querySelectorAll("nav li")[1].style.borderBottom = "none"
    }

    //etc. per le altre sez
})