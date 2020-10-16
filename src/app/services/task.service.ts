import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: Task[];

  constructor() {
    this.task = [
      // {
      //   title: 'Write',
      //   description: 'I have to Write',
      //   hide: true
      // },
      // {
      //   title: 'Build Web site',
      //   description: 'I have to build a web site',
      //   hide: true
      // },
    ];
  }

  getAllTasks() {
    if(localStorage.getItem("tasks") === null){
      return this.task;
    }else{
      this.task = JSON.parse(localStorage.getItem("tasks"));
      return this.task;
    }
  }

  createTask(task: Task) {
    this.task.push(task);
    let tasks = [];
    if(localStorage.getItem("tasks") === null){
      tasks.push(task)
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task){
    for (let index = 0; index < this.task.length; index++) {
      if(task == this.task[index]){
        this.task.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.task));
      }
    }
  }
}
