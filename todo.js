export function done(tasks, index) {
  tasks[index].done = true;
  return tasks;
}
