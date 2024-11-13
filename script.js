function createGrid(width, height){

    let numberOfBoxes = width;
    let numberOfRows = height;

    const container = document.createElement("div");

    container.classList.add("container");

    container.style.display = "flex";
    container.style.flexFlow = "column nowrap";
    container.style.width = "512px";
    container.style.alignItems = "center";
    container.style.margin = "auto";
    container.style.marginTop = "20px";
    container.style.border = "4px solid blue"; 
    container.style.borderRadius = "7px";

    while(numberOfRows){
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexFlow = "row nowrap";
        row.style.width = "512px";
        while(numberOfBoxes){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.padding = "0px";
            box.style.margin = "0px";
            box.style.border = "1px solid green";
            box.style.display = "flex";
            box.style.height = "30px";
            box.style.flex = "1 1 30px";
            row.appendChild(box);
            numberOfBoxes--;     
        }
        numberOfBoxes = width;
        container.appendChild(row);
        numberOfRows--;
    }
    document.body.appendChild(container);

    const boxes = Array.from(document.querySelectorAll(".box"));

    boxes.forEach(function(elem) {
        elem.addEventListener("mouseenter", function () {
            elem.classList.add("paint");
        });

});
}

const button = document.createElement("button");
button.textContent = ("New Grid");
button.style.display = "flex";
button.style.fontSize = "30px";
button.style.padding = "10px";
button.style.borderRadius = "12px";

document.body.appendChild(button);

createGrid(16, 16);

const buttonOnPage = document.querySelector("button");

buttonOnPage.addEventListener("click", () => {
    const number = prompt("Please enter a number. This will be the width and height of the new grid (16 by default)");
    const gridbox = document.querySelector(".container");
    gridbox.remove();

    if (number === null) {
        createGrid(16,16);
    }

    else{
    createGrid(number, number);
    }
});

