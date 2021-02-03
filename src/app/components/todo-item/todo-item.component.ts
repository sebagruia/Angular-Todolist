import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {TodoService} from "../../services/todo-service";
import { Task } from 'src/app/models/Task';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task!:Task;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void{

  }

  // Set Dynamic Classes
  setClasses(){
    let classes = {
      todoState:true,
      "is-complete":this.task.completed
    }
    return classes;
  }

  onToggle(task:any){
    // Toggle on UI
    task.completed=!task.completed;
    // Toggle on server
    this.todoService.toggleCompleted(task).subscribe(task=>console.log(task));
  }

  onDelete(task:Object){
    this.todoDelete.emit(task);
  }

}
