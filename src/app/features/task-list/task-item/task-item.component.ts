import { Component, Inject, inject, Input, input } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  tasksService= inject(TasksService);
  activatedRoute= inject(ActivatedRoute);
  router = inject(Router);
  @Input() taskDetails:any;

  markAsDone() {
      this.taskDetails.status = !this.taskDetails.status;
  }

}
