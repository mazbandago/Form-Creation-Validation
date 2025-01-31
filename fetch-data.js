// async function fetchUserData(){
//     const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');
//     try{
//         const apiUrl = await fetch('https://jsonplaceholder.typicode.com/users');
//         if(!response.ok){
//             const response = 'Network is not readily available';
//         }
//         const users = await response.json();
//     }

//     catch(error){' the dat is not fetched'};  

    dataContainer.textContent = 'change';
    console.log(dataContainer.textContent);

}