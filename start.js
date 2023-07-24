document.addEventListener('click', (event) => {
    event.preventDefault()

    if (event.target.tagName !== 'A') {
        const music = new Audio('Star Wars Theme Song By John Williams.mp3')

        music.play()
        music.volume = 0.20
    } else {
        window.location = event.target.href
    }
})
