const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitAuth);

function onSubmitAuth(event) {
	event.preventDefault();

	const email = event.currentTarget.email.value;
	const password = event.currentTarget.password.value;

	email === '' || password === '' ? alertShow() : sendForm(event.currentTarget);
}

function alertShow() {
	alert('Всі поля повинні бути заповнені!');
}

function sendForm(form) {
	const formData = new FormData(event.currentTarget);
	const data = {};
	formData.forEach((value, name) => {
		data[name] = value;
	});

	console.log(data);
	event.currentTarget.reset();
}
