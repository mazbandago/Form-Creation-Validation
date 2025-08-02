document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit',(event) => {
    event.preventDefualt();

   const username = document.getElementById('username').value.trim();

    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();

    const isValid = true;
    const messages = [];

    if(username.length < 3){
        isValid = false;
        messages.push = 'your username is too short';
    };

    if (!email.includes ("@") && !email.includes(".")){
        isValid = false;
        messages.push = 'check your email and add @ and .';
    };

    if(password.length <= 8){
        isValid = false
        messages.push = 'password too short, try again';
    };

    feedbackDiv.style.display ="block";
    if(isValid){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else{
        feedbackDiv.innerHTML = messages.join ('<br>');
        feedbackDiv.style.color = '#dc3545';
    };

    form.submit(); 
    });
});
