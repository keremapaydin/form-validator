const form = document.getElementById('form');
const passwordEl = document.getElementById('password');
const password1El = document.getElementById('password1');
const messageContainer = document.querySelector('.message-container');
const message= document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity();
   if(!isValid){
        message.textContent = 'Please fill all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
   if(passwordEl.value  === password1El.value){
        passwordMatch = true;
        passwordEl.style.borderColor = 'green';
        password1El.style.borderColor = 'green';
    } 
    else{
        passwordMatch = false;
        messageContainer.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'Red';
        passwordEl.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        return;

    }
    if ( isValid && passwordMatch){
        message.textContent = 'Successfully Registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
       name: form.name.value,
       phone: form.phone.value,
       email:  form.email.value,
       website: form.website.value,
       password: form.password.value 
    };
}

function processFormData(e){
    e.preventDefault();

    validateForm();

    if(isValid&& passwordMatch){
        storeFormData();
    }
}


form.addEventListener('submit', processFormData);