document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    });

const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event){
    event.preventDefualt();

   const username = document.getElementById('username');
    const userNameValue = document.getElementById('username').Value;
    username = userNameValue.trim();

    const email = document.getElementById('email');
    const emailValue = document.getElementById('email').value;
    email = emailValue.trim();

    const password = document.getElementById('password');
    const passwordValue = document.getElementById('password').value;
    password = passwordValue.trim();

    const isValid = true;
    const messages = [];

    if(username.length < 3){
        isValid = false;
        messages.push = 'your username is too short';
    };

    // if (email.includes "@" && "."){
    //     isValid = false;
    //     messages.push = 'check your email and add @';
    // };

    if(password.lengh <= 8){
        isValid = false
        messages.push = 'password too short, try again';
    };

    feedbackDiv.style.display ="block";
    if(isValid===true){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
        return;
    } else{
        messages.push = 'Registration failed <br>';
        feedbackDiv.innerHTML = 'Registration failed <br>';
        feedbackDiv.style.color = '#dc3545';
    };

    form.submit(); 
});

