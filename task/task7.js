const http  =  require('http')

const server = http.createServer((req,res)=>{

    console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>')
    res.write('<body><h1>Hello From my Node.js Server!</h1></body>')
    res.write('<body>Welcome home <br></body>')
    res.write('<body>Welcome to About Us page<br></body>')
    res.write('<body>Welcome to my Node Js project<br></body>')
    res.write('</html>')
    res.end();

})

server.listen(3000);