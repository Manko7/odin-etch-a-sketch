console.log("LETS GO")
let canvas = document.getElementById("container")
let count = 16
let rows = []

for (let i = 0; i < count; i++) {
    let row = document.createElement("div")
    row.className = "rowCell"
    canvas.appendChild(row)
}

rows = document.getElementsByClassName("rowCell")

for (let index = 0; index < rows.length; index++) {
    for (let counter = 0; counter < 16; counter++) {
        let col = document.createElement("div")
        col.className = "colCell"
        rows[index].appendChild(col)
    }
}