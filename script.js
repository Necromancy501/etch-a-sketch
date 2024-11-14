function createGrid(width, height){

    let numberOfBoxes = width;
    let numberOfRows = height;

    const container = document.createElement("div");

    container.classList.add("container");

    container.style.display = "flex";
    container.style.flexFlow = "column nowrap";
    container.style.width = "512px";
    container.style.height = "512px";
    container.style.alignItems = "stretch";
    container.style.margin = "auto";
    container.style.marginTop = "10px";
    container.style.border = "4px solid blue"; 
    container.style.borderRadius = "7px";

    while(numberOfRows){
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexFlow = "row nowrap";
        row.style.width = "512px";
        row.style.alignItems = "stretch";
        row.style.justifyContent = "space-around";
        row.style.flex = "1 0 auto";
        while(numberOfBoxes){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.padding = "0px";
            box.style.margin = "0px";
            box.style.border = "1px solid green";
            box.style.display = "flex";
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
            elem.style.backgroundColor = randomColor();    
        });

    });
}

function randomAll(){
    const boxes = Array.from(document.querySelectorAll(".box"));
    boxes.forEach(function(elem) {
            elem.style.backgroundColor = randomColor();    
    });
}

const banner = document.createElement("div");
banner.style.display = "flex";
banner.style.flexFlow = "row nowrap";
banner.style.justifyContent = "space-evenly";
banner.style.alignItems = "center";
banner.style.gap = "40px";

const button = document.createElement("button");
button.classList.add("new");
button.textContent = ("New Grid");
button.style.display = "flex";
button.style.fontSize = "30px";
button.style.padding = "10px"; 
button.style.borderRadius = "12px";

banner.appendChild(button);

const buttonFill = document.createElement("button");
buttonFill.classList.add("fill");
buttonFill.textContent = ("Fill All!");
buttonFill.style.display = "flex";
buttonFill.style.fontSize = "30px";
buttonFill.style.padding = "10px";
buttonFill.style.borderRadius = "12px";

banner.appendChild(buttonFill);

const buttonDisco = document.createElement("button");
buttonDisco.classList.add("disco");
buttonDisco.textContent = ("Disco!!");
buttonDisco.style.display = "flex";
buttonDisco.style.fontSize = "30px";
buttonDisco.style.padding = "10px";
buttonDisco.style.borderRadius = "12px";

banner.appendChild(buttonDisco);

document.body.appendChild(banner);

createGrid(16, 16);

const buttonOnPage = document.querySelector(".new");

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

const buttonFillOnPage = document.querySelector(".fill");

buttonFillOnPage.addEventListener("click", randomAll);

const buttonDiscoOnPage = document.querySelector(".disco");
let discoInterval;
let isDiscoOn = false;

buttonDiscoOnPage.addEventListener("click", () => {
    if (isDiscoOn) {
        buttonDiscoOnPage.style.backgroundColor = "aquamarine";
        clearInterval(discoInterval);
        isDiscoOn = false;
    }
    else {
        buttonDiscoOnPage.style.backgroundColor = "rgb(132, 172, 38)";
        discoInterval = setInterval (randomAll, 100);
        isDiscoOn = true;
    }

});
