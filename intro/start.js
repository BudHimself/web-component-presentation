const btn = document.querySelector("button")

btn.addEventListener('click', (event) => {
    event.preventDefault()

    if (event.target.tagName !== 'A') {
        const music = new Audio('Star Wars Theme Song By John Williams.mp3')

        music.play()
        music.volume = 0.05
    } else {
        window.location = event.target.href
    }
})
