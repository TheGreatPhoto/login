function makeThisHappen(){
	var name = document.getElementById("name-focus").value;
	var lastName = document.getElementById("userLastName").value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var password2 = document.getElementById('passwordTwo').value;

	if (name == "" || lastName == "" || email == "" || password == "") {
document.getElementById("errortext").style.visibility = "visible";

	}else{
		document.getElementById("errortext").style.visibility = "hidden";
		db = firebase.database();
	    var currentdate = new Date(); 
	    db.ref('user/' + (currentdate.getMonth()+1) + "-" + currentdate.getFullYear() + "-"+  currentdate.getHours() + "-" + currentdate.getMinutes() +"-" + currentdate.getSeconds()).set({
		NAME: name,
	    LAST_NAME: lastName,
	    EMAIL: email,
	    PASSWORD: password,
	    REPEAT_PASSWORD: password2
	  });
	}

	 /*
        This is a firebase reference that grabs my json object and also by default refreshes the value on the page
        which I pass into the callback function. This is where all of the magic happens.
    */
    
}