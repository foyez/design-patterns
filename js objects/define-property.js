const task = {
	title: 'My title',
	desc: 'My description'
};

Object.defineProperty(task, 'toString', {
	value: function () {
		return this.title + ' ' + this.desc;
	},
	writable: false,
	enumerable: false,
	configurable: false
});

// Object.defineProperty(task, 'toString', {
// 	enumerable: true
// });

task.toString = 'hi';

const urgentTask = Object.create(task); // inheritance
Object.defineProperty(urgentTask, 'toString', {
	value: function () {
		return this.title + ' ' + 'is urgent';
	},
	writable: false,
	enumerable: false,
	configurable: false
});

console.log(task.toString());
console.log(Object.keys(task));
console.log(urgentTask.toString());
