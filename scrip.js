// Función para mostrar el siguiente mensaje
function showNextPhrase(buttonId, nextSectionId, nextButtonId) {
    document.getElementById(buttonId).style.display = 'none';
    document.getElementById(nextSectionId).style.display = 'block';
    if (nextButtonId) {
        document.getElementById(nextButtonId).style.display = 'block';
    }
    launchConfetti();
}

// Efecto de confeti
function launchConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            })
        );
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}
function handleButtonClick(buttonId, phraseId, nextButtonId) {
    // Mostrar confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });

    // Mostrar el mensaje correspondiente
    document.getElementById(buttonId).style.display = 'none';
    document.getElementById(phraseId).style.display = 'block';

    // Mostrar el siguiente botón (si existe)
    if (nextButtonId) {
        document.getElementById(nextButtonId).style.display = 'block';
    }
}

// Cargar confeti al iniciar la página
window.onload = () => {
    launchConfetti();
};
