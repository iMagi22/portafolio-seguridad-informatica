const element = document.getElementById("typewriter");

if (element) {

    const text = "Magdalena Yesenia Tristán Rivera | ";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        } else {
            i = 0;
            element.innerHTML = "";
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
}
