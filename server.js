var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){

    if(req.url=="/"){
        var data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    }
    else if(req.url=="/about"){
        var data = fs.readFileSync('about.html', 'utf8');
        res.end(data);
    }
    else if(req.url=="/contact"){
        var data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);
    }
    else{
        var error= fs.writeFileSync('demo.txt', 'hello world');
        if(error){
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.write('File write Fail');
            res.end();
        }
        else{
            res.writeHead(200,{'Content-type' : 'text/html'});
            res.write('File write Success');
            res.end();
        }
    }
});

server.listen(3000);
console.log("Server Run Success");
