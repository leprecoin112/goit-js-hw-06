const inputRef = document.querySelector('#validation-input');
console.log(inputRef.dataset.length);

inputRef.addEventListener('blur', validation);

function validation(event) {
	if (
		Number.parseInt(event.currentTarget.dataset.length) ===
		event.currentTarget.value.length
	) {
		if (event.currentTarget.classList.contains('invalid')) {
			event.currentTarget.classList.remove('invalid');
			event.currentTarget.classList.add('valid');
		}
		event.currentTarget.classList.add('valid');
	} else {
		if (event.currentTarget.classList.contains('valid')) {
			event.currentTarget.classList.remove('valid');
			event.currentTarget.classList.add('invalid');
		}
		event.currentTarget.classList.add('invalid');
	}
}
