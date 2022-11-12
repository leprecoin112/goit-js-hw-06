const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...ingredients.map(makeIngredientElement));

function makeIngredientElement(text) {
	const element = document.createElement('li');
	element.textContent = text;
	element.classList.add('item');

	return element;
}
