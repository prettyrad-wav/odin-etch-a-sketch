let body = document.querySelector("body")

let gridContainer = document.querySelector(".grid-container")

let gridSize = 16

function createGrid(){
let i = 1
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
}

createGrid()

function draw(e){
    if (e.target.matches('.box')) {
                e.target.classList.toggle("color", true)
            console.log("mouseover")    
            }
}

gridContainer.addEventListener("mousedown", (e) => {
        gridContainer.addEventListener("mouseover", draw)   
   console.log("mousedown") 
})


gridContainer.addEventListener("mouseup", (e) => {
    gridContainer.removeEventListener("mouseover", draw)
    console.log("mouseup")    
})




