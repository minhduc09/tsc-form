(function(){
	// public function 
	this.validateEmail = function(email){	// check if email is valid
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	this.validateData = function(){
		//get values from input
		let vName = $('#form-name').val();
		let vEmail = $('#form-email').val();
		let vMes = $('#form-mess').val();
		// if name is not inputted
		if(vName === ""){
			// change name's input's border color
			$('#form-name').css("border","1px solid red");
			// show message remind user what inputs are missing
			$('.contact-message').show();
			// show the missing input
			$('#name').show();
		}
		else{
			$('#form-name').css("border","none");	// change border back to normal if name is inputted
			$('#name').hide();						// hide the missing input
		}
		// if email is not inputted
		if(vEmail === ""){
			// change email's input's border color
			$('#form-email').css("border","1px solid red");
			// show message remind user what inputs are missing
			$('.contact-message').show();
			// show the missing input
			$('#email').show();
		}
		else{
			$('#email').hide();						// hide the missing input
			if(this.validateEmail(vEmail) === true){
				$('#form-email').css("border","none");	// change border back to normal if email is inputted
				$('.alert-message').hide();
				$('#alert-email').hide();
			}
			else{
				// change email's input's border color
				$('#form-email').css("border","1px solid red");
				$('.alert-message').show();
				$('#alert-email').show();
			}
		}
		// if message is not inputted
		if(vMes === ""){
			// change message's input's border color
			$('#form-mess').css("border","1px solid red");
			// show message remind user what inputs are missing
			$('.contact-message').show();
			// show the missing input
			$('#message').show();
		}
		else{
			$('#form-mess').css("border","none");	// change border back to normal if message is inputted
			$('#message').hide();					// hide the missing input
		}
		// if no inputs are missing
		if(vMes !== "" && vEmail !== "" && vName !== ""){
			// hide message remind user what inputs are missing
			$('.contact-message').hide();
		}
	}

	// global var 
	window.g_classContact=this;
})();





