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
