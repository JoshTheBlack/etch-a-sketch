const maindiv = document.getElementById("maindiv");
const slider = document.getElementById("mySize");
const output = document.getElementById("output");

output.innerHTML = slider.value;
document.getElementById("clearButton").addEventListener("click", clear);

slider.oninput = function() {
    output.innerHTML = this.value;
    resetGrid();
    buildGrid(this.value);
}

function buildGrid(sz) {
    maindiv.style.gridTemplateColumns = `repeat(${sz}, 1fr)`;
    for (let i=0; i<sz**2; i++) {
        const cell = document.createElement('div');
        cell.setAttribute("id", "div" + i);
        cell.setAttribute("class", "cell");
        cell.addEventListener("mouseover", fillColor);
        maindiv.appendChild(cell);
    }
}

function resetGrid() {
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.firstChild);
    }
}

function clear() {
    let size = output.innerHTML;
    resetGrid();
    buildGrid(size);
}

function fillColor(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

buildGrid(16)