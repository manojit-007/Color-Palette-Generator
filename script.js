
const wrapper = document.querySelector(".wrapper");
const refreshBtn = document.querySelector(".refresh_btn");
let messageBox = document.querySelector(".messageBox")


const maxBoxes = 20;

const generatePalette = () => {
    wrapper.innerHTML = ""; //clearing the wrapper
    for (let i = 0; i < maxBoxes; i++) {
        //generating a random hex code for color
        let randomHexValue = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHexValue = `#${randomHexValue.padStart(6, "0")}`;
        let randomHexValue2 = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHexValue2 = `#${randomHexValue2.padStart(6, "0")}`;

        //creating a new "li" element add it to the wrapper
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background: linear-gradient(-45deg, ${randomHexValue}, ${randomHexValue2});"></div>
        <span class="hex-value">${randomHexValue},${randomHexValue2}</span>`;
        color.addEventListener("click", () => copyColor(color, `${randomHexValue}, ${randomHexValue2}`));
        wrapper.appendChild(color);
    }
}

generatePalette();

const copyColor = (elem, HexValue) => {
    const colorElement = elem.querySelector(".hex-value")
    navigator.clipboard.writeText(`background: linear-gradient(-45deg,${HexValue})`).then(() => {
        colorElement.innerText = "Copied"
        messageBox.classList.add("active")
        setTimeout(() => colorElement.innerText = HexValue, 1000)
        setTimeout(() => messageBox.classList.remove("active"), 1000)
    }).catch(() => alert("Failed to copy the color code!"))
}

refreshBtn.addEventListener("click", generatePalette);

