var btn = document.getElementsByClassName("buttons");
var displayColor = document.getElementsByTagName("h2")[0]
var colors = generateRandomColors();
var color = pickColor().toLowerCase();
var mudarCores = document.getElementById("mudar");
var msg = document.getElementById("message")

displayColor.textContent = color.toUpperCase()

for(n in colors) {
    btn[n].style.backgroundColor = colors[n]
}

console.log(generateRandomColor());

for(n=0; n<btn.length; n++) {
    btn[n].addEventListener("click", comparar)
}

mudarCores.addEventListener("click", reset)










function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "RGB(" + r +", " + g + ", " + b + ")"
}

function generateRandomColors() {
    var cores = []
    for(i=0; i < 6; i++) {
        cores.push(generateRandomColor());
    }
    return cores
}

function pickColor() {
    num = Math.floor(Math.random() * colors.length)
    return colors[num]
}

function comparar() {
    if(this.style.backgroundColor == color) {
        for(i=0; i<btn.length;i++) {
            btn[i].style.backgroundColor = color;
        }
        mudarCores.textContent = "Novas Cores";
        msg.textContent = "Acertou!"
    } else {
        this.style.backgroundColor = "#232323";
        console.log("INCORRECT")
        msg.textContent = "Tente novamente"
    }
}

function reset() {
    colors = generateRandomColors();

    color = pickColor().toLowerCase();

    displayColor.textContent = color.toUpperCase();

    mudarCores.textContent = "Novas cores"

    for(n in colors) {
        btn[n].style.backgroundColor = colors[n]
    }
}