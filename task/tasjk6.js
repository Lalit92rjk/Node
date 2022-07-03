/*const http  =  require('http')

const server = http.createServer((req,res)=>{

    console.log(req)

})

server.listen(3000);*/

const http =  require('http')

const port  =  4000;

const server = http.createServer(function(req,res){

    res.write('My name is Lalit')
    res.end()

})

server.listen(port,function(error){
    if(error){
        console.log('something went wrong',error)
    }else{
        console.log('server listening on port ' +  port)
    }
})