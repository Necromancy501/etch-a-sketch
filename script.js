const WIDTH = 16;
const HEIGHT = 16;

let numberOfBoxes = WIDTH;
let numberOfRows = HEIGHT;

const container = document.createElement("div");

container.style.display = "flex";
container.style.flexFlow = "column nowrap";
container.style.width = "512px";
container.style.alignItems = "center";
container.style.margin = "auto";
container.style.marginTop = "40px";
container.style.border = "4px solid blue"; 
container.style.borderRadius = "7px";

while(numberOfRows){
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexFlow = "row nowrap";
    row.style.width = "512px";
    while(numberOfBoxes){
        const box = document.createElement("div");
        box.style.border = "1px solid green";
        box.style.display = "flex";
        box.style.height = "30px";
        box.style.flex = "0 0 30px";
        row.appendChild(box);
        numberOfBoxes--;     
    }
    numberOfBoxes = WIDTH;
    container.appendChild(row);
    numberOfRows--;
}

document.body.appendChild(container);