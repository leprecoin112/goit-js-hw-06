const WIDTH_DEFAULT = 30;
const HEIGHT_DEFAULT = 30;

const refs = {
	input: document.querySelector('input'),
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
	boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onClickCreateBtn);
refs.destroyBtn.addEventListener('click', onClickDestroyBtn);

function onClickCreateBtn() {
	const number = Number.parseInt(refs.input.value);
	createBoxes(number);
}

function onClickDestroyBtn() {
	destroyBoxes();
}

function createBoxes(amount) {
	const dives = [];
	for (let i = 0; i < amount; i += 1) {
		const div = document.createElement('div');
		div.style.backgroundColor = getRandomHexColor();
		div.style.width = WIDTH_DEFAULT + i * 10 + 'px';
		div.style.height = HEIGHT_DEFAULT + i * 10 + 'px';
		dives.push(div);
	}

	refs.boxes.append(...dives);
}

function destroyBoxes() {
	refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
