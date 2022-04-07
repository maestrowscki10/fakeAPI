


const http = easyHTTP
// //get
// http.length('https://jsonplaceholder.typicode.com/users')
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err))


const data ={
    name:'rahim', 
    username:'maestrowscki10'

}

http.post('https://jsonplaceholder.typicode.com/users',data)
 .then(data=>console.log(data))
   .catch(err=>console.log(err))