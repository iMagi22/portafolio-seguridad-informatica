const element = document.getElementById("typewriter");

if (element) {
    const text = "Magdalena Yesenia Tristán Rivera | ";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">_</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Elimina el "_" después de terminar si prefieres, 
            // o déjalo parpadeando con CSS.
            document.querySelector(".cursor").classList.add("blink");
        }
    }
    typeWriter();
}
