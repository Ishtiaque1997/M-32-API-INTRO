//1. Fetch from a url
//2. convert the response to json
//3. consoling the data

//loading data from json placeholder
function loadData(){
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res=>res.json())
 .then(data=>console.log(data))
}
//loading users data from json placeholder 
function loadUsers(){
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=>res.json())
 .then(data=>displayUsers(data))//calling the function
}


function displayUsers(users){//passing parameter
 const ul=document.getElementById('users');//fetch by id
  for (const user of users){//loop throw
   const li=document.createElement('li');//create li in ul
   li.innerText=`name:${user.name},email:${user.email}`;//insert text in li
   ul.appendChild(li)//appending to  ul
  }
}

 