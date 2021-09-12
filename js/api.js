//1. Fetch from a url
//2. convert the response to json
//3. consoling the data
function loadData(){
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res=>res.json())
 .then(data=>console.log(data))
}
function loadUsers(){
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res=>res.json())
 .then(data=>displayUsers(data))

}

function loadPost(){
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=>res.json())
 .then(data=> showPosts(data));
}
function displayUsers(users){
 const ul=document.getElementById('users');
  for (const user of users){
   // console.log(user.name)
   const li=document.createElement('li');
   li.innerText=`name:${user.name},email:${user.email}`;
   ul.appendChild(li)
  }
}

 function showPosts(data){
  const lists=document.getElementById('post-title')
  for(const post of data)
   {
    const list=document.createElement('li');
    list.innerText=`title:${post.title}`;
    lists.appendChild(list)

   }
 }