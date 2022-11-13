let counterValue = 0;
const refs = {
	btnIncrement: document.querySelector('[data-action="increment"]'),
	btnDecrement: document.querySelector('[data-action="decrement"]'),
	value: document.querySelector('#value'),
};

refs.btnIncrement.addEventListener('click', onClickIncrement);
refs.btnDecrement.addEventListener('click', onClickDecrement);

function onClickIncrement() {
	counterValue += 1;
	refs.value.textContent = counterValue;
}

function onClickDecrement() {
	counterValue -= 1;
	refs.value.textContent = counterValue;
}
