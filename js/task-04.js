let counterValue = 0;
const refs = {
	btnIncrement: document.querySelector('[data-action="increment"]'),
	btnDecrement: document.querySelector('[data-action="decrement"]'),
	value: document.querySelector('#value'),
};

refs.btnIncrement.addEventListener('click', increment);
refs.btnDecrement.addEventListener('click', decrement);

function increment() {
	counterValue += 1;
	refs.value.textContent = counterValue;
}

function decrement() {
	counterValue -= 1;
	refs.value.textContent = counterValue;
}
