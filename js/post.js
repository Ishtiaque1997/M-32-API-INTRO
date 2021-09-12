//display all posts on ui
function loadPosts(){
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=>res.json())
 .then(data=>displayPosts(data))
}
loadPosts();//calling the function
function displayPosts(posts){
 const postContainer=document.getElementById('posts');
 for(const post of posts){
  const div=document.createElement('div');//create div
  div.classList.add('post')//add class to div
  div.innerHTML=`
  <h3>${post.title}</h3>
  <p>${post.body}</p>
  `
  postContainer.appendChild(div);
  // console.log(post)
 }
}
//post method
function addAPost(){
 fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',//specify the method
  body:JSON.stringify({
   title:'my new post',
   body:'this is all',
   userId:1
  }),//body of the post
  headers:{'Content-type': 'application/json; charset=UTF-8' ,
 }//headers 
 })
 .then(res=>res.json())
 .then(data=>console.log(data))
}
addAPost();
//other methods are there like post,update/patch.delete
