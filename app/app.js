var btn = document.getElementsByClassName("buttons");
var displayColor = document.getElementsByTagName("h2")[0]

var colors = generateRandomColors();

var color = pickColor().toLowerCase();

displayColor.textContent = color

for(n in colors) {
    btn[n].style.backgroundColor = colors[n]
}

console.log(generateRandomColor());

for(n=0; n<btn.length; n++) {
    btn[n].addEventListener("click", comparar)
}



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
        console.log("CORRECT")
    } else {
        console.log("INCORRECT")
    }
}