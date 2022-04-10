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

