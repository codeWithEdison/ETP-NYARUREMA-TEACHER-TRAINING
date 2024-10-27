const http = require('http');

// create a server 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('this  meassage is come  from server ');
    res.end(); 
}).listen(8080,function(){ 
    console.log('our server listening on port http://localhost:8080/'); 
    
});