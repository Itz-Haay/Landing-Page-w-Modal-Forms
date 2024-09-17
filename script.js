const formContainer = document.querySelector(".form-container");
const signUpModal = document.querySelector(".signup-form-wrapper");
const logInModal = document.querySelector(".login-form-wrapper");
const singUpBtn = document.querySelector(".signup-btn");
const logInBtn = document.querySelector(".login-btn");
const signUpX = document.querySelector(".signup-x");
const logInX = document.querySelector(".login-x");



singUpBtn.addEventListener('click', () => {
    signUpModal.classList.add('display');
    formContainer.classList.add('disable');
})
signUpX.addEventListener('click', () => {
    signUpModal.classList.remove('display');
    formContainer.classList.remove('disable');
})

logInBtn.addEventListener('click', () => {
    logInModal.classList.add('display');
    formContainer.classList.add('disable');
})

logInX.addEventListener('click', () => {
    logInModal.classList.remove('display');
    formContainer.classList.remove('disable');
})

