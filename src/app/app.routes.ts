import { Routes } from '@angular/router';
import { TaskListComponent } from './features/task-list/task-list.component';
import { TaskItemComponent } from './features/task-list/task-item/task-item.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    component:TaskListComponent,
    title:'All Tasks'

  },
  {
    path:'**',
    component:NotFoundComponent,
  }
];
