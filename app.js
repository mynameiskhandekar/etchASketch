let container = document.querySelector("#container");
let resizeButton = document.querySelector("#resizeButton");
container.style.backgroundColor = "gray"
function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 600/size;
    for(let i=0; i<size*size; i++) {
        let innerdiv = document.createElement("div");
        innerdiv.classList.add("grid-square");

        innerdiv.style.width = `${squareSize}px`;
        innerdiv.style.height = `${squareSize}px`;

        innerdiv.style.backgroundColor = "white";
        innerdiv.style.opacity = 0;
    
        innerdiv.addEventListener("mouseenter", () => {
            let currOp = parseFloat(innerdiv.style.opacity);
            currOp = Math.min(currOp+0.1, 1);
            innerdiv.style.opacity = currOp;
        });
        container.appendChild(innerdiv);
    }
}

createGrid(16);

resizeButton.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (1-100): ");
    newSize = parseInt(newSize);
    if(isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 to 100");
        return;
    }
    createGrid(newSize);
})