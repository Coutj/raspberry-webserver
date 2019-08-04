var ws = new WebSocket("ws://192.168.1.6:31337");

function getRange (){
	var rangeValue = document.getElementById("myRange").value;
	document.getElementById("rangeValueText").innerHTML = (rangeValue);
	ws.send(JSON.stringify({pwm:rangeValue}));
}
