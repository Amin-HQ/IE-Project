let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');
let signupFormContainer = document.querySelector('.signup-form-container');
let signupFormClose = document.querySelector('#signup-form-close');
let signupLink = document.querySelector('#signup-link');
let loginLink = document.querySelector('#login-link');

const bg = document.querySelector('#img-soldier');
const imgBtnn = document.querySelectorAll('.img-btn');

imgBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#img-soldier').src = src;
    })
});

let i = 0;
setInterval(() => {
    imgBtnn.forEach((btn) => btn.classList.remove('active'));
    if (i < imgBtnn.length) {
        bg.src = imgBtnn[i].getAttribute('data-src'); 
        imgBtnn[i].classList.add('active'); 
        i++;
    } else {
        i = 0;
    }

    console.log(i);
}, 5000);

window.onscroll = () =>{ 
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
    loginForm.classList.remove('active');
    signupFormContainer.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

signupFormClose.addEventListener('click', () =>{
    signupFormContainer.classList.remove('active');
});

signupLink.addEventListener('click', (e) =>{
    e.preventDefault();
    loginForm.classList.remove('active');
    signupFormContainer.classList.add('active');
});

loginLink.addEventListener('click', (e) =>{
    e.preventDefault();
    signupFormContainer.classList.remove('active');
    loginForm.classList.add('active');
});

const signupForm = document.getElementById('signup-form');

const validateFullName = (fullname) => {
    const regex = /^[\u0600-\u06FF\s]+$/;
    return regex.test(fullname);
};

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePhone = (phone) => {
    const regex = /^09\d{9}$/;
    return regex.test(phone);
};

const validatePassword = (password) => {
    return password.length >= 6;
};

const showError = (inputElement, errorMessage) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('visible');
    inputElement.classList.add('error');
};

const hideError = (inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    errorElement.classList.remove('visible');
    inputElement.classList.remove('error');
};

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const fullname = document.getElementById('fullname');
    if (!validateFullName(fullname.value)) {
        showError(fullname, 'لطفا فقط از حروف فارسی استفاده کنید');
        isValid = false;
    } else {
        hideError(fullname);
    }

    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        showError(email, 'لطفا یک ایمیل معتبر وارد کنید');
        isValid = false;
    } else {
        hideError(email);
    }

    const password = document.getElementById('password');
    if (!validatePassword(password.value)) {
        showError(password, 'رمز عبور باید حداقل ۶ کاراکتر باشد');
        isValid = false;
    } else {
        hideError(password);
    }

    const confirmPassword = document.getElementById('confirm-password');
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'رمز عبور مطابقت ندارد');
        isValid = false;
    } else {
        hideError(confirmPassword);
    }

    const phone = document.getElementById('phone');
    if (!validatePhone(phone.value)) {
        showError(phone, 'شماره تماس باید ۱۱ رقم و با ۰۹ شروع شود');
        isValid = false;
    } else {
        hideError(phone);
    }

    if (isValid) {
        alert('ثبت نام با موفقیت انجام شد');
        signupForm.reset();
        signupFormContainer.classList.remove('active');
    }
});

const inputs = signupForm.querySelectorAll('input[required]');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        switch(input.id) {
            case 'fullname':
                if (validateFullName(input.value)) {
                    hideError(input);
                }
                break;
            case 'email':
                if (validateEmail(input.value)) {
                    hideError(input);
                }
                break;
            case 'password':
                if (validatePassword(input.value)) {
                    hideError(input);
                }
                break;
            case 'confirm-password':
                if (input.value === document.getElementById('password').value) {
                    hideError(input);
                }
                break;
            case 'phone':
                if (validatePhone(input.value)) {
                    hideError(input);
                }
                break;
        }
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});