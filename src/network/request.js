
export  function request(config){
    return new Promise((resolve,reject) =>{
        const first =   axios.create({
            params:{
                StateTime:'2019-01-01',
                EndTime :'2019-12-01'
            }
        })   
        first(config).then(res=>{resolve(res)}).catch(err=>{reject(err)})
    })
}
