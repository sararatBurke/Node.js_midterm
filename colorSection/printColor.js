var http = require('http');
var color = require('./randomColor');
var display = color.randomColor();

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="color:#000; text-align:center; font-size:3em; text-shadow:1px 1px 3px #262626; box-shadow:2px 2px 2px #000; border: 5px solid'+ headBorder +';">Ten different color sections!</h1>'); //write a response to the client
  res.write('<p style="background:'+ color1 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em;  height:69px; margin: auto; border-radius:5px;">'+color1+'</p>');
  res.write('<p style="background:'+ color2 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color2+'</p>');
  res.write('<p style="background:'+ color3 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color3+'</p>');
  res.write('<p style="background:'+ color4 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color4+'</p>');
  res.write('<p style="background:'+ color5 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color5+'</p>');
  res.write('<p style="background:'+ color6 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color6+'</p>');
  res.write('<p style="background:'+ color7 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color7+'</p>');
  res.write('<p style="background:'+ color8 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color8+'</p>');
  res.write('<p style="background:'+ color9 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color9+'</p>');
  res.write('<p style="background:'+ color10 +'; color:#000; width:50%; border: 2px solid #000; text-align:center; text-shadow:1px 1px 2px #fff; font-size:2em; height:69px; margin: auto; border-radius:5px;">'+color10+'</p>');
  res.write('<body style="background: #e0ebeb;"></body>')
  
  res.end(); //end the response
}).listen(4000);