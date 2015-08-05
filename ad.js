
function add(){
	//logic is here
var a = document.getElementById("firstnumber").value;
var b = document.getElementById("secondnumber").value;
  
  var c = parseInt(a) + parseInt(b);
  
  alert(c);

  document.getElementById("aa").innerHTML = c;
}


function sub(){
	//logic is here
var a = document.getElementById("firstnumber").value;
var b = document.getElementById("secondnumber").value
  
  var c = parseInt(a) - parseInt(b);

  alert(c);

  document.getElementById("aa").innerHTML = c;
}

function multiply(){
	//logic is here
var a = document.getElementById("firstnumber").value;
var b = document.getElementById("secondnumber").value
  
  var c = parseInt(a) * parseInt(b);

  alert(c);

  document.getElementById("aa").innerHTML = c;
}