document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    });

const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event){
    event.preventDefualt();

   const myUserName = document.getElementById('username');
    const userNameValue = document.getElementById('username').ariaValueMax;
    myUserName = userNameValue.trim();

    const myEmail = document.getElementById('email');
    const emailValue = document.getElementById('email').value;
    myEmail = emailValue.trim();

    const myPassword = document.getElementById('password');
    const passwordValue = document.getElementById('password').value;
    myPassword = passwordValue.trim();


    const isValid = true;
    const messages = [];

    if(myUserName.length < 3){
        isValid = false;
        messages.push = 'your username is too short';
    };

    if (myEmail.!includes "@" && "."){
        isValid = false;
        messages.push = 'check your email and add @';
    };

    if(myPassword.lengh <= 8){
        isValid = false
        messages.push = 'password too short, try again';
    };

    feedbackDiv.style.display ='block';

    if(isValid=true){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else{
        messages.push = 'Registration failed <br>';
        feedbackDiv.innerHTML = 'Registration failed <br>';
        feedbackDiv.style.color = '#dc3545';
    };

    form.submit(); 
});

