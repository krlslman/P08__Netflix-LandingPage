const tab_items = document.querySelectorAll('.tab')
const tab_content_items = document.querySelectorAll('.tab-content-item');

//select Tab Content item
function select_item(e) {
	remove_border();
	remove_show();
	//for current tab border
	this.classList.add('tab-border');

	const tab_content_item = document.querySelector(`#${this.id}-content`);
	tab_content_item.classList.add('show')
};

function remove_border() {
	tab_items.forEach(item => item.classList.remove('tab-border'));
};
function remove_show() {
    tab_content_items.forEach(item => item.classList.remove('show'));
};
// Lister for tab click
tab_items.forEach(item => item.addEventListener('click', select_item));