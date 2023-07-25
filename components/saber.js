class Saber extends HTMLElement {
    constructor() {
        super();
        const opponentName = this.getAttribute("opponent-name")

        const template = document.querySelector("#saber")
        const templateClone = template.cloneNode(true)

        const opponentImg = templateClone.content.querySelector("img.opponent-img")
        opponentImg.setAttribute("src", `img/${opponentName}.png`)

        const templateContent = templateClone.content.querySelector(".opponent")

        const saberLight = this.createSaberLight(opponentName)
        templateContent.appendChild(saberLight)

        const style = this.getStyle()

        this.appendChild(templateContent)
        this.appendChild(style)
        this.addOpeningEvent()
    }

    addOpeningEvent() {
        this.addEventListener('click', (event) => {
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

    createSaberLight(opponentName) {
        const saberLight = document.createElement("div")
        saberLight.setAttribute("id", `saber-${opponentName}`)
        saberLight.classList.add("saber-light")

        return saberLight
    }

    getStyle() {
        const style = document.createElement("style")
        style.textContent = `
            .saber-light {
                position: absolute;
                bottom: 300px;
                height: 0;
                transition: height 1s linear;
                width: 2px;
            }
            
            .saber-open {
                height: 300px;
            }
        `

        return style
    }
}

customElements.define('my-saber', Saber)