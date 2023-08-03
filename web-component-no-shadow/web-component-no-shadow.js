const sabers = document.querySelectorAll("img.opponent-saber")

sabers.forEach((saber, index) => {
    if (index < 3) {
        saber.addEventListener('click', (event) => {
            const open = "saber-open"
            const parent = event.target.parentNode
            const elem = parent.querySelector(".saber-light")

            if (elem.classList.contains(open)) {
                elem.classList.remove(open)
            } else {
                elem.classList.add(open)
            }
        })
    }
})

function angularForce() {
    document.querySelector("my-saber > div > img.opponent-img").src = "../img/angular.png"
}

function reactForce() {
    const saberLight = document.querySelector("my-saber > div > div.saber-light")
    saberLight.style.backgroundColor = "deepskyblue"
    saberLight.style.boxShadow = "0 0 5px 5px #00BFFF"
}

let click = 0

function vueForce() {
    if (click === 0) {
        document.querySelector("my-saber > div > img.opponent-saber").src = "../img/banane.webp"
        document.querySelector("my-saber > div > div.saber-light").style.bottom = "380px"
        click = 1
    } else {
        document.querySelector("my-saber > div > img.opponent-saber").src = "../img/sac-banane.jpeg"
        document.querySelector("my-saber > div > img.opponent-saber").style.transform = "rotate(0.25turn)"
        document.querySelector("my-saber > div > div.saber-light").style.bottom = "295px"
    }
}