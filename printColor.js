var http = require('http');
var color = require('./randomColor');
var display = color.randomColor();

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="color:#000; text-align:center; text-shadow:1px 1px 5px #124; border: 5px solid'+ headBorder +';">Ten different color sections!</h1>'); //write a response to the client
  res.write('<p style="background:'+ color1 +'; color:#fff; width:50%; border: 2px solid #000; text-align:center; text-shadow:2px 2px 2px #000; font-size:2em;  height:69px; margin: auto; border-radius:5px; ">'+color1+'</p>');
  res.write('<p style="background:'+ color3 +'; color:#fff; width:50%; border: 2px solid #000; text-align:center; text-shadow:2px 2px 2px #000; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color3+'</p>');
  res.write('<p style="background:'+ color4 +'; color:#fff; width:50%; border: 2px solid #000; text-align:center; text-shadow:2px 2px 2px #000; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color4+'</p>');
  res.write('<p style="background:'+ color5 +'; color:#fff; width:50%; border: 2px solid #000; text-align:center; text-shadow:2px 2px 2px #000; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color5+'</p>');
  res.end(); //end the response
}).listen(4000);