//declare consts and variables
const container = document.querySelector(".container");
const colorButtons = document.querySelectorAll(".colorChoice");
const userColorPicker = document.querySelector("#inputColor");
const clearButton = document.querySelector(".clear");
let slider = document.querySelector("#sizeRange");
let color = "black";

//creategrid function here
function createGrid(gridNumber) {
    gridSize = gridNumber * gridNumber;

    for (let i = 1; i <= gridSize; i++) {
        let gridItem = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement("beforeend", gridItem);
    }

    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", colorGrid));
}


//colorgrid function here
function colorGrid() {
    switch (color) {
        case "psy":
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.classList.remove("gray");
            break;
        case "gray":
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add("gray");
                }
            } else if (this.classList == "gray" && this.style.backgroundColor == "rgb(0, 0, 0") {
                return;
            } else {
                this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }
            break;
        case "black":
            this.style.backgroundColor = "black";
            this.classList.remove("gray");
            break;
        case "eraser":
            this.style.backgroundColor = "white";
            this.classList.remove("gray");
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove("gray");
            break;
    }
}

//clear button
function eraseAllColor() {
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "white");
}

//updating the color variable
function changeColor(event) {
    switch (event.target.dataset.color) {
        case "psy":
            color = "psy";
            break;
        case "gray":
            color = "gray";
            break;
        case "eraser":
            color = "eraser";
            break;
        default:
            color = "black";
            break;
    }
}

//pixelSize function
function pixelSize() {
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
}

// user color selection
function userColorSelection(event) {
    color = event.target.value;
}

// default page load
createGrid(10);

//eventlisteners
clearButton.addEventListener("click", eraseAllColor);
colorButtons.forEach(colorButton => colorButton.addEventListener("click", changeColor));
slider.addEventListener("mouseup", pixelSize);
userColorPicker.addEventListener("change", userColorSelection, false);
userColorPicker.addEventListener("input", userColorSelection, false);