class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}

class EventScheduler {
  constructor() {
    this.stack = [];
  }
  push(name, priority) {
    const newTask = new Task(name, priority);

  }
}