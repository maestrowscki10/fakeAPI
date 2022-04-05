const http = EasyHTTP
const users = http.length('https://jsonplaceholder.typicode.com/users')
  console.log(users);