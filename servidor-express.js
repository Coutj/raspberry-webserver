var express = require("express");
var app = express();

var wsserver = require("ws").Server;
var wss = new wsserver({ port : 31337 });



wss.on("connection", function(ws) {
    var timer = setInterval(sendValue, 500, ws);  
    
    ws.on("message", function(message) {
        var obj = JSON.parse(message);
        console.log("Valor PWM " + obj.pwm);
    }); 
    
    ws.on("close", function(client) {
        clearInterval(timer);
        console.log("disconected")
    });
});

function sendValue(socket) {
    
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();
    socket.send(currentHour + ":" + currentMinute + ":" + currentSecond);
}


app.use("/assets", express.static("assets"));
app.use("/js_files", express.static("js_files"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/pagina.html");
});


app.listen(80, function() {
    console.log("Servidor iniciado na porta 80");
});
