const Task = function (name) {
	this.name = name;
	this.completed = false;

	this.complete = function () {
		console.log('completing task: ' + this.name);
		this.completed = true;
	};

	this.save = function () {
		console.log('saving task: ' + this.name);
	};
};

const task1 = new Task('constructors');
const task2 = new Task('modules');
const task3 = new Task('singletons');
const task4 = new Task('prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
