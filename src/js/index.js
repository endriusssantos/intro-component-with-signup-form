const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const inputPassword = document.getElementById('inputPassword');
const inputEmail = document.getElementById('inputEmail');
const btn = document.getElementById('btn');
const errorFirstName = document.getElementById('errorFirstName');
const errorLastName = document.getElementById('errorLastName');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const inputValue = inputEmail.value.trim();

btn.addEventListener('click', () => {
    if (inputFirstName.value === '') {
        errorFirstName.style.display = 'inline-flex';
        inputFirstName.placeholder = '';
        inputFirstName.classList.add('error-input');
    } else {
        errorFirstName.style.display = 'none';
        inputFirstName.classList.remove('error-input');
    }

    if (inputLastName.value === '') {
        errorLastName.style.display = 'inline-flex';
        inputLastName.placeholder = '';
        inputLastName.classList.add('error-input');
    } else {
        errorLastName.style.display = 'none';
        inputLastName.classList.remove('error-input');
    }

    if (!isEmail(inputValue) || inputEmail.value === '') {
        errorEmail.style.display = 'inline-flex';
        inputEmail.placeholder = 'email@example.com';
        inputEmail.classList.add('placeholder-red');
        inputEmail.classList.add('error-input');
    } else {
        errorEmail.style.display = 'none';
        inputEmail.classList.remove('error-input');
        inputEmail.classList.remove('placeholder-red');
    }

    if (inputPassword.value === '') {
        errorPassword.style.display = 'inline-flex';
        inputPassword.placeholder = '';
        inputPassword.classList.add('error-input');
    } else {
        errorPassword.style.display = 'none';
        inputPassword.classList.remove('error-input');
    }
});

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};