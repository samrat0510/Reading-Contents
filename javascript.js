function fun1(){
    alert("You are already on the same page :)")
}


var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

function signup(){
  var emailTextBox = document.getElementById('login-email');
	var email = emailTextBox.value;
	var emailMatch = /^([A-Za-z0-9\.-]+)@([a-z0-9\.]+)()([a-z]{2,5})$/
	emailTextBox.style.color = "black";
	if(emailMatch.test(email))
	{
		emailTextBox.style.backgroundColor = "green";
	}
	else{
    emailTextBox.style.backgroundColor = "red";
    alert("Incorrect E-mail");
}
