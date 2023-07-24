// class myComponent extends HTMLElement {
//     constructor() {
//         super();
//         this.appendChild("Coucou les gens")
//     }
// }
//
// customElements.define('my-component', myComponent)


const myId = document.querySelector("#lorem")
// const myClass = document.querySelector(".my-class")
const navElement = document.querySelector("header > section > nav")

const allP = myId.querySelectorAll("p")

console.log('--------- 0')
console.log(navElement)
console.log(navElement.innerHTML)
console.log('--------- 1')
console.log(allP)
console.log('--------- 2')
allP.forEach(p => console.log(p.innerText))
console.log('--------- 3')


const myP = document.createElement("p")

myP.innerText = "coucou les gens"
myP.setAttribute("class", "bg-red")
myP.classList.add("bg-blue")

myId.appendChild(myP)

// myId.remove()

// generate w web component which display content like a selectable content. The content to display as list of string

