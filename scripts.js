
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");



};


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";

}

function closemenu(){
    sidemenu.style.right="-200px";

}







const errorText = document.querySelector(".error-text");
	var Password ="1234";
	function passcheck(){
		if (document.getElementById('pass1').value != Password) {
			errorText.style.display = "block";
			errorText.textContent = "ERROR! Password Not Match.";
			return false;
		}
		if (document.getElementById('pass1').value == Password) {
			window.open("images/my-cv.pdf", "_blank");
		}

	}

	
	const scriptURL = 'https://script.google.com/macros/s/AKfycbx0QJQJyHOAOy82_NSYJub2eZ1r2_e-uMl7tPf9hcEb5JU3jqpkzH9Pl6p4TZA77xH-/exec'
	const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

	form.addEventListener('submit', e => {
	  e.preventDefault()
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => { msg.innerHTML = "Message sent succesfully"
	setTimeout(function(){msg.innerHTML = "" },5000)
	form.reset()
})
		.catch(error => console.error('Error!', error.message))
	})