import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo-service";

import {Task} from "../../models/Task";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Task[] = [];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  this.todoService.getTodos().subscribe(tasks =>{
    this.todos = tasks;
  })
  }

  deleteTodo(task:Task){
    // Remove from UI
    this.todos = this.todos.filter(item=>item.id !== task.id);
   // Remove from server
    this.todoService.deleteTodo(task).subscribe();
  }

  addTodo(task:Task){
    this.todoService.addTodo(task).subscribe(task=>this.todos.push(task))
    console.log('Add todo');
  }

}
