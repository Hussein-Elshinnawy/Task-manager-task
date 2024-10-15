import { Component, inject } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from '../../core/interfaces/task';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasksService = inject(TasksService);

  router = inject(Router);

  tasksList: Task[] = [];

  ngOnInit() {
    this.getAllTasks();
  }
  getAllTasks() {
    this.tasksService.getAllTasks().subscribe(
      (response: any) => {
        if (response.todos) {
          this.tasksList = response.todos.map((task: any) => ({
            ...task,
            status: false,
          }));
          console.log(this.tasksList);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
