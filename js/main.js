window.addEventListener("DOMContentLoaded", () => {
    let colorInput = document.getElementById("colorPicer"),
        colorBtn = document.getElementById("colorBtn"),
        rainbownBtn = document.getElementById("rainbownBtn"),
        eraser = document.getElementById("eraserBtn"),
        clearBtn = document.getElementById("clearBtn"),
        sizeValue = document.getElementById("sizeValue"),
        sizeSlider = document.getElementById("sizeSlider"),
        grid = document.getElementById("grid"),
        settingDiv = document.querySelector(".settings"),
        paintMode = "color",
        color = colorInput.value;

    createDivs(sizeSlider.value);

    settingDiv.addEventListener("click", (e) => {

        if (e.target == colorBtn || e.target == rainbownBtn || e.target == eraser) {
            colorBtn.classList.remove("active");
            rainbownBtn.classList.remove("active");
            eraser.classList.remove("active");
            e.target.classList.add("active")
        }else if (e.target == clearBtn)
            createDivs(sizeSlider.value)



    });

    sizeSlider.addEventListener("change", () => {
        createDivs(sizeSlider.value);
    });

    function createDivs(howMuchElem) {
        sizeValue.innerHTML = `${sizeSlider.value} X ${sizeSlider.value}`;
        grid.replaceChildren();
        grid.style.setProperty("--repeatNumber", howMuchElem);

        for (let i = 0; i < howMuchElem * howMuchElem; i++) {
            let gridElem = document.createElement("div");
            gridElem.classList.add("gridElem");
            grid.appendChild(gridElem);
        }
    }

    grid.addEventListener("mousemove", (e) => {
        let elem = e.target;
        let mode = document.querySelector(".active");

        switch (mode) {
            case colorBtn:color = colorInput.value;
                break;
            case rainbownBtn: color = 'rgb(' + 
            (Math.floor(Math.random() * 256)) + 
            ',' + (Math.floor(Math.random() * 256)) + 
            ',' + (Math.floor(Math.random() * 256)) + ')';
                break;
            case eraser: color = "white"
                
                
        }
        elem.style.backgroundColor = color;
        console.log(elem.style.backgroundColor);
    });
});
