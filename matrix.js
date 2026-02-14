// ===== EFECTO MAQUINA DE ESCRIBIR =====

const nameText = "MAGDALENA YESENIA TRISTAN RIVERA; 
const typingElement = document.getElementById("typing-name");

let index = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return; // evita error si no existe

    if (!deleting && index < nameText.length) {
        typingElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } 
    else if (!deleting && index === nameText.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
    } 
    else if (deleting && index > 0) {
        typingElement.innerHTML = nameText.substring(0, index - 1);
        index--;
        setTimeout(typeEffect, 50);
    } 
    else {
        deleting = false;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();
