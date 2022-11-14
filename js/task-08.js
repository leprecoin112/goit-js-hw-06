const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitAuth);

function onSubmitAuth(event) {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.currentTarget;

	email.value === '' || password.value === ''
		? alertShow()
		: sendForm(event.currentTarget);
}

function alertShow() {
	alert('Всі поля повинні бути заповнені!');
}

function sendForm(form) {
	const formData = new FormData(form);
	const data = {};
	formData.forEach((value, name) => {
		data[name] = value;
	});

	console.log(data);
	form.reset();
}
