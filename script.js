console.log("LETS GO")
let canvas = document.getElementById("container")
let rowCount = 16
let rows = []
let playerCount = 16
let randomRGB = 0

for (let i = 0; i < rowCount; i++) {
    let row = document.createElement("div")
    row.className = "rowCell"
    canvas.appendChild(row)
}

rows = document.getElementsByClassName("rowCell")


function initiateGrid(playerCount) {
    for (let index = 0; index < rows.length; index++) {
        for (let counter = 0; counter < playerCount; counter++) {
            let col = document.createElement("div")
            col.className = "colCell"
            col.onmouseover = function(e) {
                switch(randomRGB = Math.floor(Math.random() * 3)) {
                    case 0:
                        this.classList.remove("paintBlue")
                        this.classList.remove("paintGreen")
                        this.classList.add("paintRed")
                        break;
                    case 1:
                        this.classList.remove("paintBlue")
                        this.classList.remove("paintRed")
                        this.classList.add("paintGreen")
                        break;
                    case 2:
                        this.classList.remove("paintGreen")
                        this.classList.remove("paintRed")
                        this.classList.add("paintBlue")
                        break;
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

    for (let index = 0; index < rows.length; index++) {
        rows[index].innerHTML = ""
    }
    initiateGrid(newSize);
}

initiateGrid(playerCount);
