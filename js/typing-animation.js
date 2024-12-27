document.addEventListener('DOMContentLoaded', (event) => {
    const text = "bin.fail";
    const typedHeader = document.getElementById('typed-header');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typedHeader.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust the typing speed here (lower number = faster)
        }
    }

    typeWriter();
});