export function done(tasks, index) {
  tasks[index].done = true;
  return tasks;
}

export function help() {
  return "commands: add, done, help";
}
