	// JS-implementation-for-year-and-stuff

let target = document.getElementsByClassName('date-and-stuff')[0];
let date = new Date();
let year = date.getFullYear();
let init = 2019;

target.innerText = `©️ ${init} - ${year}`;


/*________________________________________________________________________________*/

	// JS-implementation-for-remember-me

let uname = document.getElementById('inputEmail');
let pwd = document.getElementById('inputPassword');
let checkbox = document.getElementById('checkbox');


checkbox.addEventListener('click',function(){
	if (pwd.value.length === 0 || uname.value.length === 0) {
		alert('Enter email and password first')
		checkbox.checked=false;
	}else {
		let response = false;
		if(localStorage.getItem('uname') == undefined){
			response = confirm('Do you want to save credentials ?');
		}
		if(localStorage.getItem('uname') != undefined){
			response = confirm('Are you sure you want to update your credentials ?');
		}
		if(response == true){
			localStorage.setItem('uname',uname.value);
			localStorage.setItem('pwd',pwd.value);
		}
	}
})

	// JS-implementation-for-autofill-of-saved-input-field
if (localStorage.getItem('uname') != undefined) {
		let response = false;
		response = confirm('Do you want to use saved credentials')
		if(response == true){
			let username = localStorage.getItem('uname');
			let password = localStorage.getItem('pwd');
			uname.value = username;
			pwd.value = password;
		}
	}



