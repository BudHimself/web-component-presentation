const sabers = document.querySelectorAll("img.opponent-saber")

sabers.forEach(saber => {
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
})