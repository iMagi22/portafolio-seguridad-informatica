function createMatrix(canvasId){

const canvas = document.getElementById(canvasId);

if (!canvas) return;

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = 120;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 12;
const columns = canvas.width / fontSize;
const drops = [];

for(let x = 0; x < columns; x++) drops[x] = 1;

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.1)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ff66";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;
}
}

setInterval(draw,40);
}

createMatrix("matrix-left");
createMatrix("matrix-right");
