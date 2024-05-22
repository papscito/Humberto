document.addEventListener('DOMContentLoaded', function () {
    const question = document.getElementById('question');
    const buttons = document.getElementById('buttons');
    const showQuestionBtn = document.getElementById('showQuestionBtn');
    const content = document.getElementById('content');

    // Mostrar la pregunta con un efecto de aparición
    setTimeout(function () {
        question.classList.add('appear');

        // Desvanecer la pregunta después de 2 segundos
        setTimeout(function () {
            question.classList.remove('appear');
            question.classList.add('fade-out');

            setTimeout(function () {
                question.classList.add('hidden');
                content.style.display = 'block';
                buttons.classList.remove('hidden');

                setTimeout(function () {
                    content.classList.add('appear');
                }, 100);

                    content.classList.remove('appear');


            }, 2000); // Espera a que la transición de opacidad termine
        }, 2000); // 2 segundos antes de desvanecer la pregunta
    }, 100); // Comienza casi inmediatamente

    showQuestionBtn.addEventListener('click', function () {
        question.classList.remove('hidden');
        question.classList.remove('fade-out');
        content.style.display = 'none';
        buttons.classList.add('hidden');

        setTimeout(function () {
            question.classList.add('appear');

            setTimeout(function () {
                question.classList.remove('appear');
                question.classList.add('fade-out');

                setTimeout(function () {
                    question.classList.add('hidden');
                    content.style.display = 'block';
                    buttons.classList.remove('hidden');

                    setTimeout(function () {
                        content.classList.add('appear');
                    }, 100);

                    content.classList.remove('appear');
    
    
                }, 2000); // Espera a que la transición de opacidad termine

            }, 2000); // 2 segundos antes de desvanecer la pregunta nuevamente
        }, 100); // Comienza casi inmediatamente
    });
});


// se va a ir haciendo mas pequeño el boton no al clickearlo mientras que el si se va a ir haciendo mas grande, solo al click no


const buttonYes = document.getElementById('yesBtn');
const buttonNo = document.getElementById('noBtn');

buttonNo.addEventListener('click', function () {
    let noWidth = 50;
    let yesWidth = 50;

    const interval = setInterval(function () {
        noWidth -= 10;
        yesWidth += 10;

        buttonNo.style.width = `${noWidth}%`;
        buttonYes.style.width = `${yesWidth}%`;

        if (noWidth <= 0) {
            clearInterval(interval);
            buttonNo.style.display = 'none'; // Ocultar el botón "No" cuando su ancho llegue a 0
        }
    }, 100); // Cambio cada 100ms
});