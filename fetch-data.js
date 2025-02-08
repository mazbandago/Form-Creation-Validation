const dataContainer = document.getElementById('api-data');
const userList = document.createElement('ul');
async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    try{
        const response = await fetch(apiUrl);

        if(response.ok){
          const users = await response.json();
          users.forEach((user) => {
          let li = document.createElement('li');
        
            li.textContent = user.name;
            userList.appendChild(li);

          })

        }else{
            
        }
    }
    catch(error){

        dataContainer.innerHTML = ''
        dataContainer.textContent = 'Failed to load user data.';
    };  
    dataContainer.innerHTML = '';

    dataContainer.appendChild(userList);

}   
fetchUserData();