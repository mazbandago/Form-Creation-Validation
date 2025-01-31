async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');
    
    try{
        const apiUrl = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            const response = 'Network is not readily available';
        }
        const users = await response.json();
    }
    catch(error){
        dataContainer.innerHTML = ''.
        dataContainer.textContent = 'Failed to load user data.';
    };  

    dataContainer.innerHTML = '';
    
    const userList = document.createElement('ul');
    let users = [apiUrl];
    users.forEach(user =>{
        const li = createElement('li');
        li.textContent = apiUrl;
        li.appendChild(userList);
        userList.appendChild(dataContainer); 
    });
    
        
};

document.addEventListener("DOMContentLoaded", (fetchUserData) => {
    console.log('success');
});