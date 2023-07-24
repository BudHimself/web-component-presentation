class Saber extends HTMLElement {
    constructor() {
        super();
        const opponentName = this.getAttribute("opponent-name")

        const template = document.querySelector("#saber")

        const saber = document.createElement("div")
        saber.setAttribute("id", `saber-${opponentName}`)
        saber.classList.add("saber")

        const templateClone = template.cloneNode(true)
        const opponentImg = templateClone.content.querySelector("img.opponent-img")
        opponentImg.setAttribute("src", `img/${opponentName}.png`)

        const templateContent = templateClone.content.querySelector(".opponent")
        templateContent.appendChild(saber)

        const style = this.getStyle()

        this.appendChild(templateContent)
        this.appendChild(style)
    }

    getStyle() {
        const style = document.createElement("style")
        style.textContent = `
            .saber {
                position: absolute;
                bottom: 270px;
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
