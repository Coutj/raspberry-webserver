var express = require("express");
var app = express();

var wsserver = require("ws").Server;
var wss = new wsserver({ port : 31337 });

wss.on("connection", function(ws) {
    var timer = setInterval(envia_valor, 500, ws);  
    
    ws.on("message", function(message) {
        console.log(message);
    }); 
    
    ws.on("close", function(client) {
        clearInterval(timer);
    });
});

function envia_valor(socket) {
    socket.send("Este é seu número da sorte: " + Math.random()*1000);
}


app.use("/assets", express.static("assets"));
app.use("/js_files", express.static("js_files"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/pagina.html");
});


app.listen(80, function() {
    console.log("Servidor iniciado na porta 80");
});
