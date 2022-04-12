class EasyHTTP {
get(url){
return new Promise((resolve,reject)=>{
    fetch(url)
    .then(res =>res.json())
    .then(data =>resolve (data))
    .catch(err => reject(err))
})

    
}
put(url,data){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method:'PUT',
            Headers:{
                'contenttype':'app/json'  
            },  body: JSON.stringify(DataTransferItemList)
        } )
        .then(res =>res.json())
        .then(data =>resolve (data))
        .catch(err => reject(err))
    })
        
    }

    delete(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE',
                Headers:{
                    'contenttype':'app/json'  
                }
            } )
            .then(res =>res.json())
            .then(data =>resolve ('resource deleted'))
            .catch(err => reject(err))
        })
            
        }
    
    }




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