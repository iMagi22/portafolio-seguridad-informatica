const element = document.getElementById("typewriter");

if (element) {
    const text = "Magdalena Yesenia Tristán Rivera | _";
    let i = 0;
    element.innerHTML = "";

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
}
