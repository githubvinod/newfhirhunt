const http = require('http');
 
const PORT = 5080//process.env.PORT || 'SOME PORT YOU DEFINE';
 
const server = http.createServer((req, res) => {
  var html = buildHtml(req);
  //res.append('Content-Type', 'text/plain');
  res.writeHead(200, {"Content-Type": "text/html",    'Content-Length': html.length,  'Expires': new Date().toUTCString()});

  res.end(html);
});
server.listen(PORT,"10.10.10.64");

function buildHtml(req) {
  var header = ' <header name = "Access-Control-Allow-Origin" value = "*" /><meta http-equiv="Access-Control-Allow-Origin" content="*">';
  var body = '{"data":"Hello world!"}';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
}

/*


var upVote= 1;
console.log(15);return;
var fs = require('fs');
fs.readFile("upvote.json", function(err, data) {
   //json = data;
   var jsonData = JSON.parse(data);
   console.log(15);
   upVote = upVote + parseInt(jsonData.upvoteCount);
});

//console.log(stringfyData);
/*
var fs = require('fs');
fs.writeFile("file.json", data);
*/
