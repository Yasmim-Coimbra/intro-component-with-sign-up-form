const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio');
const btnForm = document.getElementById('form-btn');
const alertaErro = document.querySelectorAll('.error-msg');

camposObrigatorios.forEach((campo, indexCampo) => {
    campo.addEventListener("blur", () => {
        if (campo.value.trim() === '') {
            campo.classList.add('invalido');
            alertaErro[indexCampo].classList.add('on');
        } else {
            campo.classList.remove('invalido');
            alertaErro[indexCampo].classList.remove('on');
        }
    });

    const emailInput = document.querySelector('input[name="email"]');
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.add('invalido');
            alertaErro[2].classList.add('on');
        } else {
            emailInput.classList.remove('invalido');
            alertaErro[2].classList.remove('on');
        }
    });

    campo.addEventListener('focus', () => {
        campo.classList.remove('invalido');
        alertaErro[indexCampo].classList.remove('on');
    });
});

btnForm.addEventListener('click', (event) => {
    camposObrigatorios.forEach((campo, indexCampo) => {
        if (campo.value.trim() === '') {
            event.preventDefault();
            campo.classList.add('invalido');
            alertaErro[indexCampo].classList.add('on');
        } else {
            campo.classList.remove('invalido');
            alertaErro[indexCampo].classList.remove('on');
        }
    });

    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        event.preventDefault();
        emailInput.classList.add('invalido');
        alertaErro[2].classList.add('on');
    } else {
        emailInput.classList.remove('invalido');
        alertaErro[2].classList.remove('on');
    }
});