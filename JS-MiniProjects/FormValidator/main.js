const usernameInput = document.querySelector('#username');
const passInput = document.querySelector('#password');
const pass2Input = document.querySelector('#password2');
const emailInput = document.querySelector('#email');
const nextBtn = document.querySelector('.next');
const clearBtn = document.querySelector('.clear');
const endMsg = document.querySelector('.popup');
const popupInput = document.querySelector('.close');
const sendBtn = document.querySelector('.send');
const ageInput = document.querySelector('#age');
const sexSelect = document.querySelector('#sex');
const citySelect = document.querySelector('#city');
const proffesionInput = document.querySelector('#proffesion');
const formRegister = document.querySelector('.register-form');
const formInformation = document.querySelector('.information-form');


const inputList = [usernameInput, passInput, pass2Input, emailInput];

// Registration form
const showError = (input, msg = 'Choose something') => {
    const formBox = input.parentElement;
    const errorMsg =formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = (input) => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = (input) =>{
    input.forEach(el => {
        if(el.value === ''){
            showError(el, el.placeholder);
        }else{
            clearError(el);
        }
        if(el == ageInput){
            if(el.value < 18){
                showError(ageInput, 'You are too young!')
            }else{
                clearError(age);
            }
        }
    })
}

const checkLength = (input, min) => {
    if(input.value.length < min){
        showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} must consist of ${min} characters.`)
    }
}

const checkPasswords = (password1, password2) => {
    if(password1.value !== password2.value){
        showError(password2, 'Password are not the same!')
    }
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail is not correct')
    }
}

const checkErrors = () =>{
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el=>{
        if(el.classList.contains('error')){
            errorCount++;
        }
    })

    if(errorCount === 0){
        endMsg.classList.add('show-popup');
        formRegister.style.opacity = 0;

    }
}
const checkInformationErrors = ()=>{
    const allInputs = document.querySelectorAll('.inform-box');
    let errorCount = 0;

    allInputs.forEach(el=>{
        if(el.classList.contains('error')){
            errorCount++;
        }
    })

    if(errorCount === 0){
        endMsg.classList.add('show-popup');
        document.querySelector('.show-popup p').textContent = 'Welcome! You do it great! Thank you! ';
        nextBtn.textContent = 'close';
        formInformation.style.opacity = 0;
        nextBtn.location.reload();
    }
}
// Input effects
popupInput.addEventListener('click', ()=>{
    endMsg.classList.remove('show-popup');
    formRegister.style.display = 'none';
    formInformation.style.display = 'block';
})

nextBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    checkForm(inputList);
    checkLength(usernameInput, 5);
    checkLength(passInput, 8);
    checkPasswords(passInput, pass2Input);
    checkEmail(emailInput);
    checkErrors();
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    inputList.forEach(el => { 
        el.value = '';
        clearError(el);
    });
})


sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkForm([ageInput, proffesionInput, citySelect, sexSelect]);

    checkLength(proffesionInput, 3);
    checkInformationErrors();
})