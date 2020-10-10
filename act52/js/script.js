var subjectObject = {
  "Front-end": {

  },
  "Back-end": {

  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
}

function validateForm() {
var id = document.forms["myForm"]["fname"].value;
  var fname = document.forms["myForm"]["fname"].value;
	  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["pwd"].value;
  var topix = document.forms["myForm"]["subject"].value;

  if (id == "") {
    alert("ID name seems to be empty, please fill it up!");
    return false;
  }
	 else if (fname == ""){
  	alert("Name seems to be empty, please fill it up!");
    return false;
  }
  else if (password == ""){
  	alert("Password seems to be empty, please fill it up!");
    return false;
  }
  else if (email == ""){
  	alert("Email seems to be empty, please fill it up!");
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
	else if(!document.getElementById('cat1').checked & !document.getElementById('cat2').checked & !document.getElementById('cat2plus').checked& !document.getElementById('cat3').checked) {
  	alert("Please select your category!");
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
