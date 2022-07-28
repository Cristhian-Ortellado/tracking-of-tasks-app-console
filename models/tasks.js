import { Task } from "./task.js";
import colors from "colors";
class Tasks {
  _listado = {};

  get listArr() {
    const list = [];
    Object.keys(this._listado).forEach((key) => {
      const task = this._listado[key];
      list.push(task);
    });
    return list;
  }

  constructor() {
    this._listado = {};
  }

  createTask(description = "") {
    const task = new Task(description);
    this._listado[task.id] = task;
  }

  setTasks(elements = []) {
    elements.forEach((task) => {
      this._listado[task.id] = task;
    });
  }

  printAllTasks() {
    this.listArr.forEach((task, i) => {
      const status = task.completed_at
        ? "::Completed".green
        : "::Pending".yellow;
      const index = `${i + 1}.`.green;

      console.log(`${index} ${task.description} ${status}`);
    });
  }

  printTaskByStatus(completed = true) {
    let index = 1;
    this.listArr.forEach((task, i) => {
      const status = task.completed_at
        ? `::${task.completed_at}`.green
        : "::Pending".yellow;
      const indexWithColor = `${index + "."}`.green;

      if (
        (completed && task.completed_at) ||
        (!completed && !task.completed_at)
      ) {
        console.log(`${indexWithColor} ${task.description} ${status}`);
        index++;
      }
    });
  }

  deleteTask(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompleted(ids =[]){
    
    ids.forEach(id=>{
      const task = this._listado[id];
      
      if(!task.completed_at)
          task.completed_at = new Date().toISOString();
      
    })

    this.listArr.forEach(task=>{
      if(!ids.includes(task.id)){
        this._listado[task.id].completed_at = null;
      }
    })
  }

}

export { Tasks };
