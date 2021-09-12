//1. Fetch from a url
//2. convert the response to json
//3. consoling the data
function loadData(){
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res=>res.json())
 .then(data=>console.log(data))
}