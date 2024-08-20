console.log("LETS GO")
let canvas = document.getElementById("container")
let rowCount = 16
let rows = []
let playerCount = 16
let randomRGB1 = 0
let randomRGB2 = 0
let randomRGB3 = 0


function initiateGrid(playerCount) {

    for (let i = 0; i < playerCount; i++) {
        let row = document.createElement("div")
        row.className = "rowCell"
        canvas.appendChild(row)
    }

    rows = document.getElementsByClassName("rowCell")

    for (let index = 0; index < rows.length; index++) {
        for (let counter = 0; counter < playerCount; counter++) {
            let col = document.createElement("div")
            col.className = "colCell"
            col.onmouseover = function(e) {
                if (!this.style.backgroundColor) {
                    randomRGB1 = Math.floor(Math.random() * 256)
                    randomRGB2 = Math.floor(Math.random() * 256)
                    randomRGB3 = Math.floor(Math.random() * 256)
                    this.style.backgroundColor = "rgb(" + randomRGB1 + ", " + randomRGB2 + ", "+ randomRGB3 + ")"
                }
            }
            rows[index].appendChild(col)
        }
    }
}

function setGrid() {
    let newSize = window.prompt("Enter new grid size: ")
    while (newSize > 100) {
        newSize = window.prompt("New size exceeds 100, enter new value : ")
    }
    canvas.innerHTML = ""
    initiateGrid(newSize);
}

initiateGrid(playerCount);
