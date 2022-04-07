class easyHTTP {
get(url){
return new Promise((resolve,reject)=>{
    fetch(url)
    .then(res =>res.json())
    .then(data =>resolve (data))
    .catch(err => reject(err))
})

    
}
post(url,data){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method:'POST',
            Headers:{
                'contenttype':'app/json'  
            },  body: JSON.stringify(DataTransferItemList)
        } )
        .then(res =>res.json())
        .then(data =>resolve (data))
        .catch(err => reject(err))
    })
    
        
    }
    }

