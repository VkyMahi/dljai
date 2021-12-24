//function of signUp
function signUp() {

	// errors 
	var fNname1ErrMsgInv = document.getElementById("invalid-fullname1");
	var fName2ErrMsgReq = document.getElementById("required-fullname2");
	var phone1ErrMsgInv = document.getElementById("invalid-phonenumber1");
	var phone2ErrMsgReq = document.getElementById("required-phonenumber2");
	var gender1ErrMsgReq = document.getElementById("required-gender");
	var email1ErrMsgInv = document.getElementById("invalid-email1");
	var email2ErrMsgReq = document.getElementById("required-email2");
	var pass1ErrMsgInv = document.getElementById("invalid-password1");
	var pass2ErrMsgReq = document.getElementById("required-password2");
	var confirm1ErrMsgInv = document.getElementById("invalid-confirm1");
	var confirm2ErrMsgReq = document.getElementById("required-confirm2");
	var checkErrmsg = document.getElementById("check");

	//getter method 

	let fullNameValue = document.getElementById("fullname").value;
	let phoneNumberValue = document.getElementById("phonenumber").value;
	let genderValue = document.getElementById("gender").value;
	let emailValue = document.getElementById("email").value;
	let passValue = document.getElementById("password").value;
	let confirmPasswordValue = document.getElementById("confirmPassword").value;
	let invalidCheckMsg = document.getElementById("invalidCheck").checked;

	//Regx 

	var phRegx = new RegExp("[0-9]{10}");
	var EmailRegx = /[a-zA-Z0-9_\-\.]+@[a-z]+[\.][a-z]{2,3}/
	var PasswordRegx = new RegExp("/^[a-zA-Z0-9!@#$%^&*]{6,16}$/");

	//if conditions

	//if condition for fullname
	if (fullNameValue == "") {
		fName2ErrMsgReq.style.display = "block";
		fNname1ErrMsgInv.style.display = "none";
	}
	else if (fullNameValue.length >= 10) {
		fName2ErrMsgReq.style.display = "none";
		fNname1ErrMsgInv.style.display = "none";
	}
	else {
		fName2ErrMsgReq.style.display = "none";
		fNname1ErrMsgInv.style.display = "block";
	}

	//if condition for phonenumber

	if (phoneNumberValue == "") {
		phone2ErrMsgReq.style.display = "block";
		phone1ErrMsgInv.style.display = "none";
	}
	else if (phRegx.test(phoneNumberValue)) {
		phone2ErrMsgReq.style.display = "none";
		phone1ErrMsgInv.style.display = "none";
	}
	else {
		phone2ErrMsgReq.style.display = "none";
		phone1ErrMsgInv.style.display = "block";
	}

	// if condition for gender

	if (genderValue == "") {
		gender1ErrMsgReq.style.display = "block";
	}
	else {
		gender1ErrMsgReq.style.display = "none";
	}

	//if condition for email
	if (emailValue == "") {
		email2ErrMsgReq.style.display = "block";
		email1ErrMsgInv.style.display = "none";
	}
	else if (EmailRegx.test(emailValue)) {
		email2ErrMsgReq.style.display = "none";
		email1ErrMsgInv.style.display = "none";
	}
	else {
		email2ErrMsgReq.style.display = "none";
		email1ErrMsgInv.style.display = "block";
	}

	//if condition for password

	if (passValue == "") {
		pass2ErrMsgReq.style.display = "block";
		pass1ErrMsgInv.style.display = "none";
	}
	else if (PasswordRegx.test(passValue)) {
		pass2ErrMsgReq.style.display = "none";
		pass1ErrMsgInv.style.display = "none";
	}
	else {
		pass2ErrMsgReq.style.display = "none";
		pass1ErrMsgInv.style.display = "none";

	}

	//if conditiom for confirmPassword

	if (confirmPasswordValue == passValue) {
		confirm2ErrMsgReq.style.display = "none";
		confirm1ErrMsgInv.style.display = "none";
	}
	else {
		confirm2ErrMsgReq.style.display = "none";
		confirm1ErrMsgInv.style.display = "block";
	}

	//checkbox validate
	if (invalidCheckMsg == true) {
		checkErrmsg.style.display = "none";
	}
	else {
		checkErrmsg.style.display = "block";
	}
};