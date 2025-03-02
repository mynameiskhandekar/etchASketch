let container = document.querySelector("#container");
for(let i=0; i<256; i++) {
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("grid-square");
    container.appendChild(innerdiv)
}
