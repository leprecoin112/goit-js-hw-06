const refs = {
	fontSizeControl: document.querySelector('#font-size-control'),
	text: document.querySelector('#text'),
};

refs.text.style.fontSize = refs.fontSizeControl.value + 'px';

refs.fontSizeControl.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
	refs.text.style.fontSize = event.currentTarget.value + 'px';
}
