const http = require('http');
const path = require('path');
const fs = require('fs');

let flag = '';

const hostname = 'localhost';
const port = process.env.PORT || 4000;

http.createServer((req,res) =>{
   if(req.url === '/'){
      sendRes ('index.html', 'text/html', res)
   } else if (req.url === '/send-email'){
        let body = '';
        //res.writeHead(200, {'Content-Type': 'text/html'});
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', ()=> {
            let rbody = JSON.parse(body);
            readData(rbody);
            res.end(flag);
            //rbody = '';
        });
   } else {
        sendRes (req.url, getContentType(req.url), res);
    }
   
}).listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

function sendRes(url, contentType, res){
    let file = path.join(__dirname + '/build/', url);
    fs.readFile(file, (err, content) => {
        if(err){
            res.writeHead(404);
            res.write('file not found');
            res.end();
            console.log(`error 404${file}`);
        }else{
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            console.log(`200${file}`);
        }
    })
};

function getContentType(url){
    if(path.extname(url) === '.html'){
        return 'text/html';
    } else if (path.extname(url) === '.css'){
        return 'text/css';
    } else if (path.extname(url) === '.js'){
        return 'text/javascript';
    } else if (path.extname(url) === '.json'){
        return 'application/json';
    } else {
        return 'application/octet - stream';
    }
};

function readData (body){
    const data = fs.readFileSync('usersData.json', {encoding: "utf8"});
    const rData = JSON.parse(data);
    const isFound = rData.find(element => element.email === body.email);
    if(isFound !== undefined){
        flag='true';
    }else{
        rData.push(body);
        dataUpdate(rData);
        flag='false';
    }
};

function dataUpdate (data) {
    const strData = JSON.stringify(data);
    fs.writeFileSync('usersData.json',strData, {encoding: "utf8", flag: 'w'});
}