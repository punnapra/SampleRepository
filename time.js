function startTime(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

//add a zero infront of numbers<10
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("tim").innerHTML=h +":"+ m +":" + s;
	t = setTimeout("startTime()" ,500);

}
function checkTime(i){
	if(i<10){
		i="0"+i;
		return i;
	}

	if(i>10){
		i=+i;
		return i;
	}
}
/*setInterval(function () {
    var realtime = +Date.now() + timeDiff;
    var date = new Date(realtime);
    // hours part from the timestamp
    var hours = date.getHours();
    // minutes part from the timestamp
    var minutes = date.getMinutes();
    // seconds part from the timestamp
    var seconds = date.getSeconds();

    // will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes + ':' + seconds;*/
