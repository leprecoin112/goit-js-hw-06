const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitAuth);

function onSubmitAuth(event) {
	event.preventDefault();

	if (
		event.currentTarget.email.value === '' ||
		event.currentTarget.password.value === ''
	) {
		return alert('Всі поля повинні бути заповнені!');
	} else {
		const formData = new FormData(event.currentTarget);
		const data = {};
		formData.forEach((value, name) => {
			data[name] = value;
		});

		console.log(data);
		event.currentTarget.reset();
	}
}
