// clears Message field when focused on
function clearContents(element) {
	element.value = '';
};

// gives Error messages if Contact form not complete
function displayOutput() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	if (name.length === 0) {
		alert("Please enter your name!");
		return;
	} else if (email.length === 0) {
		alert("Please enter your email address!");
		return;
	} else if (message.length === 0) {
		alert("Don't forget your message!");
		return;
	} else {
		document.getElementById("myForm").innerHTML = alert("Your message has been sent!");
	 	return;
	}
};

// powers the Unbored button
function unBore(string) {
	document.getElementById("bored").style.color = "white";
	document.getElementById("bored").style.backgroundColor = "red";
	document.getElementById("bored").style.fontStyle = "italic";
	document.getElementById("bored").style.fontSize = "120%";
	document.getElementById("bored").style.textTransform = "uppercase";
};