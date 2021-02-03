import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task!:Task;

  constructor() { }

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

}
