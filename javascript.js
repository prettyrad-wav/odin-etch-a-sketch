let body = document.querySelector("body")
let gridContainer = document.querySelector(".grid-container")
let gridInput = document.querySelector(".grid-value")
let resetBttn = document.querySelector(".reset-bttn")
let gayMode = document.querySelector(".gay-mode")
let date = new Date().getMonth();
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
        console.log("grid created")
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
    }
}

createGrid()

resetBttn.addEventListener("click", clearGrid)
resetBttn.addEventListener("click", createGrid)

function draw(e){
    if (e.target.matches('.box')) {
                e.target.classList.toggle("color", true)    
            }
            console.log("draw")
}

function zestyDraw(e){
    if (e.target.matches('.box')) {
        let num = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
        console.log(num);
        if (num === 1 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            console.log("zest")
            e.target.classList.toggle("red", true)
        } else if (num === 2 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            e.target.classList.toggle("orange", true)
        } else if (num === 3 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            e.target.classList.toggle("Yellow", true)
        } else if (num === 4 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            e.target.classList.toggle("green", true)
        } else if (num === 5 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            e.target.classList.toggle("blue", true)
        } else if (num === 6 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            e.target.classList.toggle("indigo", true)
        } else if (num === 7 && !e.target.matches('.red') && !e.target.matches('.orange') && !e.target.matches('.yellow') && !e.target.matches('.green') && !e.target.matches('.blue') && !e.target.matches('.indigo') && !e.target.matches('.violet')) {
            e.target.classList.toggle("violet", true)
        }
        console.log("zestydraw")
    }
}

gridContainer.addEventListener("mousedown", (e) => {
    console.log("mousedown")
    if (gayMode.checked === false && date === 5) {
        alert("HOMOPHOBE! HOMOPHOBE! Turn on gay mode to use this during pride month!")
    } else if (gayMode.checked === true) {
        gridContainer.addEventListener("mouseover", zestyDraw);
    } else {
        gridContainer.addEventListener("mouseover", draw) ;  
    }    
})


gridContainer.addEventListener("mouseup", (e) => {
    gridContainer.removeEventListener("mouseover", draw)    
    gridContainer.removeEventListener("mouseover", zestyDraw)    
})




