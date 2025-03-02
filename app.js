let container = document.querySelector("#container");
for(let i=0; i<255; i++) {
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("grid-square");
    container.appendChild(innerdiv)
}
