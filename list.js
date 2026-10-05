export function list(tasks) {
  return tasks.map((t, i) => `${i + 1}. ${t.title}`);
}
