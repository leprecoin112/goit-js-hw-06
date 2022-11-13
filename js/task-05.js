const refs = {
	input: document.querySelector('#name-input'),
	output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputValue);

function onInputValue(event) {
	refs.output.textContent =
		event.target.value.length > 0 ? event.target.value : 'Anonymous';
}
