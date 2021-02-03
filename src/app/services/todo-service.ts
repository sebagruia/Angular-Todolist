import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Task} from "../models/Task";
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    "Content-Type": "application/json"
  })

}
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit ="?_limit=5";

  constructor(private http:HttpClient) { }

  getTodos():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.todosUrl}${this.todosLimit}`);
   }

   toggleCompleted(task:Task):Observable<any>{
     const url = `${this.todosUrl}/${task.id}`
     return this.http.put(url, task, httpOptions);
   }




}
