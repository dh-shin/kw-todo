import { done } from "./todo.js";

const tasks = [{ title: "Buy milk", done: false }];
console.log(done(tasks, 0)[0].done === true ? "ok" : "FAIL");
