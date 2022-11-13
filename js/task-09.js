const refs = {
	changeColorBtn: document.querySelector('.change-color'),
	colorSpan: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
	const color = getRandomHexColor();
	document.body.style.backgroundColor = color;
	refs.colorSpan.textContent = color;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
