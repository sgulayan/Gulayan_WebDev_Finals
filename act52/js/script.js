
function validateForm() {
var id = document.forms["myForm"]["id"].value;
  var fname = document.forms["myForm"]["fname"].value;
	  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;

  if (id == "") {
    alert("ID name seems to be empty, please fill it up!");
    return false;
  }
	 else if (fname == ""){
  	alert("Name seems to be empty, please fill it up!");
    return false;
  }
  else if (email == ""){
  	alert("Email seems to be empty, please fill it up!");
    return false;
  }
	 else if (password == ""){
  	alert("Password seems to be empty, please fill it up!");
    return false;
  }
  else if(!document.getElementById('male').checked & !document.getElementById('female').checked) {
  	alert("Please select your gender!");
    return false;
  }
	else if(!document.getElementById('f1').checked & !document.getElementById('f2').checked & !document.getElementById('f3').checked& !document.getElementById('f4').checked & !document.getElementById('f5').checked) {
  	alert("Please select your year level!");
    return false;
  }
	else if(!document.getElementById('op1').checked & !document.getElementById('op2').checked & !document.getElementById('op3').checked & !document.getElementById('op4').checked & !document.getElementById('op5').checked & !document.getElementById('op6').checked & !document.getElementById('op7').checked & !document.getElementById('op8').checked & !document.getElementById('op9').checked & !document.getElementById('op10').checked) {
  	alert("Please select your course!");
    return false;
  }
	else if(!document.getElementById('cat1').checked & !document.getElementById('cat2').checked & !document.getElementById('cat2plus').checked & !document.getElementById('cat3').checked) {
  	alert("Please select your category!");
    return false;
  }
	else if (!document.getElementById('req').checked){
  	alert("Agree with terms and condition.");
    return false;
  }
  else{
  	welcome();
  }
}

function checkFormat(){
	
}

function welcome(){
	alert("Welcome to UIC's online libary, " + document.getElementById('fname').value );
}
