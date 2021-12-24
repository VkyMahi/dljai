//function for signIn
function signIn() {
	//errors for signIn tag p

	var userIdErrMsgReq = document.getElementById("userid1");
	var userIdErrMsgInv = document.getElementById("userid2");
	var passwordErrMsgReq = document.getElementById("passwordid1");
	var passwordErrMsgInv = document.getElementById("passwordid2");
	var checkErrmsg = document.getElementById("check");

	//getter

	let userIdMsg = document.getElementById("userId").value;
	let passwordIdMsg = document.getElementById("signInPassword").value;
	let invalidCheckMsg = document.getElementById("rememberMe").checked;

	//regx 

	var EmailRegx = /[a-zA-Z0-9_\-\.]+@[a-z]+[\.][a-z]{2,3}/
	var PasswordRegx = /[a-zA-Z0-9]/

	//if conditions for signIn

    //if conditions for userid

	if (userIdMsg == "") {
		userIdErrMsgReq.style.display = "block";
		userIdErrMsgInv.style.display = "none";
	}
	else if (EmailRegx.test(userIdMsg)) {
		userIdErrMsgReq.style.display = "none";
		userIdErrMsgInv.style.display = "none";
	}
	else {
		userIdErrMsgReq.style.display = "none";
		userIdErrMsgInv.style.display = "block";
	}

    //if conditions for passwords

    if (passwordIdMsg == "") {
		passwordErrMsgReq.style.display = "block";
		passwordErrMsgInv.style.display = "none";
	}
	else if (PasswordRegx.test(passwordIdMsg)) {
		passwordErrMsgReq.style.display = "none";
		passwordErrMsgInv.style.display = "none";
	}
	else {
		passwordErrMsgReq.style.display = "none";
		passwordErrMsgInv.style.display = "block";
	}

		//checkbox validate
		if (invalidCheckMsg == true) {
			checkErrmsg.style.display = "none";
		}
		else {
			checkErrmsg.style.display = "block";
		}

};
