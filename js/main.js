window.addEventListener("DOMContentLoaded", () => {
    let colorInput = document.getElementById("colorPicer"),
        colorBtn = document.getElementById("colorBtn"),
        rainbownBtn = document.getElementById("rainbownBtn"),
        eraser = document.getElementById("eraserBtn"),
        clearBtn = document.getElementById("clearBtn"),
        sizeValue = document.getElementById("sizeValue"),
        sizeSlider = document.getElementById("sizeSlider"),
        grid = document.getElementById("grid"),
        repeatNumber = sizeSlider.value;

    sizeSlider.addEventListener("change", () => {
        sizeValue.innerHTML = `${sizeSlider.value} X ${sizeSlider.value}`
        createDivs(sizeSlider.value);
    })

    function createDivs(howMuchElem) {

        grid.style.setProperty('--repeatNumber', sizeSlider.value);
        grid.replaceChildren();

        for (let i = 0; i < (howMuchElem * howMuchElem); i++) {
            let girdElem = document.createElement("div");
            girdElem.classList.add("girdElem");
            grid.appendChild(girdElem);
        }
    }

})