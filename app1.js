const http = EasyHTTP
const users = http.length('https://jsonplaceholder.typicode.com/users')
  .then(data=>console.log(data))
  .catch(err=>console.log(err))