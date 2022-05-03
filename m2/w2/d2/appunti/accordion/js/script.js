let bottoni = document.querySelectorAll('button')
let contents = document.querySelectorAll('.content')
// per rendere tutto dinamico in modo che i bottoni funzionino dappertutto dobbiamo ciclare l'array button

for (let bottone of bottoni) {
    bottone.addEventListener('click', function () {
        let daChiudere = document.querySelector('.content.open')
        if (daChiudere != null) {
            daChiudere.classList.remove('open')
        }
        let target = bottone.getAttribute('data-target')
        let daAprire = document.querySelector(target)
        if (daChiudere != daAprire) {
            document.querySelector(target).classList.toggle('open')
        }
    })
}

