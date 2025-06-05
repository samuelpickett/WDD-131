const date = new Date()
function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234';
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg;
}
function submitHandler(event) {
	event.preventDefault();
	let errorMsg = '';
	console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('');
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += "Card number is not a valid number. ";
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number. ';
	}

    if  ("20" + this.year.value > date.getFullYear() ||this.month.value > date.getMonth()){
		errorMsg += 'Date is not valid. ';
    }

	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg);
		return false;
	}
	return true;
}


document.getElementById("creditCard").addEventListener("submit", submitHandler);