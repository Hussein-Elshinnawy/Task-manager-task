import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url='https://dummyjson.com/todos';
  http= inject(HttpClient);
  getAllTasks(){
    return this.http.get<any>(`${this.url}`);
  }
}
