//declare consts here
const container = document.getElementById("container");
let color = "black";

//creategrid function here

function createGrid(gridNumber){
    gridSize = gridNumber * gridNumber;

    for(let i = 0; i < gridSize; i++){
        let gridItem = document.createElement("div");
        gridItem.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        gridItem.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement("beforeend", gridItem);
    }

    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", colorGrid));
}


//colorgrid function here
function colorGrid(){
    
    switch(color) {
        case "black":
            this.style.backgroundColor = "black";

    }

}


createGrid(10);
//eventlisteners here