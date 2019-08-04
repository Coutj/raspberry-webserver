
window.onload = function() { //only starts whe the page completely loads
	var ws = new WebSocket("ws://192.168.1.6:31337");
	
	ws.onopen = function(event) { //occurs when ws connection is open
		document.getElementById("botao1").addEventListener("click", function(ev) {ws.send("Botão clicado!");}, false);
	}

	ws.onmessage = function(event) { // occurs when receive a message from server
		document.getElementById("texto").innerHTML = (event.data + "<br>");
	}
	
	getRange();
}

