let body = document.querySelector("body")
let gridContainer = document.querySelector(".grid-container")
let gridInput = document.querySelector(".grid-value")
let resetBttn = document.querySelector(".reset-bttn")


function createGrid(){
    if (gridInput.value < 1 || gridInput.value > 100) {
      alert("Invalid grid size! Input needs to be between 1-100")  
    } else {
        let i = 1
        let boxes = gridInput.value
        while (i <= gridInput.value) {
        let row = document.createElement("div")
        row.classList.add("row")
        gridContainer.appendChild(row)
            for (boxes; boxes >= 1; boxes--) {
                let box = document.createElement("div")
                box.classList.add("box")
                row.appendChild(box)   
            }    
        i++
        boxes = gridInput.value
        }
        console.log("gridcreated")
    }
}

function clearGrid(){
    if (gridInput.value < 1 || gridInput.value > 100) {
        return;
    } else {
    let boxDelete = document.querySelectorAll(".box")
    let rowDelete = document.querySelectorAll(".row")
    boxDelete.forEach(el => el.remove())
    rowDelete.forEach(el => el.remove())
    console.log("clear grid")
    }
}

createGrid()

resetBttn.addEventListener("click", clearGrid)
resetBttn.addEventListener("click", createGrid)

function draw(e){
    if (e.target.matches('.box')) {
                e.target.classList.toggle("color", true)    
            }
}

gridContainer.addEventListener("mousedown", (e) => {
        gridContainer.addEventListener("mouseover", draw)    
})


gridContainer.addEventListener("mouseup", (e) => {
    gridContainer.removeEventListener("mouseover", draw)    
})




