// read custom message from query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
    const mainMessageElement = document.querySelector('#mainMessage');
    mainMessageElement.textContent = decodeURI(messageCustom);
}

// Event listeners for opening and closing the letter
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

// Event listener para abrir la carta
btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;

        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');

        // Mostrar y animar los corazones
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            heart.style.display = 'block'; // Mostrar el corazón
            const randomX = Math.floor(Math.random() * 90) + 5; // Posición X aleatoria
            const randomY = Math.floor(Math.random() * 90) + 5; // Posición Y aleatoria
            heart.style.left = randomX + '%'; // Establecer posición X aleatoria
            heart.style.top = randomY + '%'; // Establecer posición Y aleatoria
            setTimeout(() => {
                heart.style.top = '-50px'; // Mover el corazón hacia arriba
                heart.style.opacity = '0'; // Hacer el corazón transparente
            }, 50); // Retrasar la animación del corazón
        });
    }, 500);
});




btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');

        // Ocultar corazones
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart) => {
            heart.style.display = 'none';
        });
    }, 500);
});
