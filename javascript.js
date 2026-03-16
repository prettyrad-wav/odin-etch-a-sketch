let body = document.querySelector("body")

let gridContainer = document.querySelector(".grid-container")


let i = 1
let gridSize = 16
let boxes = gridSize
while (i <= gridSize) {
let row = document.createElement("div")
row.classList.add("row")
gridContainer.appendChild(row)
    for (boxes; boxes >= 1; boxes--) {
        let box = document.createElement("div")
        box.classList.add("box")
        row.appendChild(box)   
    }    
i++
boxes = gridSize
}



gridContainer.addEventListener("mousedown", (e) => {
    if (e.target.matches("box")) {
        gridContainer.addEventListener("mouseover", (e) => {
            e.target.classlist.toggle("color", true)
        })   
    }
})



