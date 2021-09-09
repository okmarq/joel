const sidebar = document.querySelector('.sidebar'),
show = document.querySelector('.show'),
front_arrow = document.querySelector('.front-arrow'),
back_arrow = document.querySelector('.back-arrow')
hamburger = document.querySelector('.hamburger');

front_arrow.addEventListener('click', e => {
	show.classList.toggle('hidden');
	sidebar.classList.toggle('w-14')
	sidebar.classList.toggle('w-48')
});

back_arrow.addEventListener('click', e => {
	show.classList.toggle('hidden');
	sidebar.classList.toggle('w-48')
	sidebar.classList.toggle('w-14')
});

hamburger.addEventListener('click', e => {
	sidebar.classList.toggle('hidden')
	front_arrow.click();
});

// class Todo {
// 	constructor(task) {
// 		this.startTime = Date.now()
// 		this.endTime = {}
// 		this.task = task
// 		this.status = false
// 	}
// }

// let TodoList = []

// TodoList.push(Todo("brush my teeth"));
// TodoList.push(Todo("have my bath"));