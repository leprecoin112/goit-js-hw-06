const categoriesEl = document.querySelector('#categories');
console.log('Number of categories: ', categories.children.length);

const itemsEl = categoriesEl.querySelectorAll('.item');
itemsEl.forEach(item => {
	console.log('Category: ', item.children[0].textContent);

	console.log('Elements: ', countItem(item.children[1]));
});

function countItem(item) {
	return item.children.length;
}
