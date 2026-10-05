export function list(tasks) {
  return tasks.map((t, i) => `\x1b[31m${i + 1}. ${t.title}\x1b[0m`);
}
