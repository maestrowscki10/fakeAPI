const EasyHTTP = require ('./app')
const http = new EasyHTTP
// //get
// http.length('https://jsonplaceholder.typicode.com/users')
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err))


const data ={
    name:'rahim', 
    username:'maestrowscki10',
    mobile:'255744554546',
    email :'abdulhansen.ah@gmail.com'

}
//update post
http.put('https://jsonplaceholder.typicode.com/users/2',data)
 .then(data=>console.log(data))
   .catch(err=>console.log(err))

   //delete user
  http.put('https://jsonplaceholder.typicode.com/users/2')
 .then(data=>console.log(data))
  .catch(err=>console.log(err))