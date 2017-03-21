import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
    declarations: [TaskListComponent, TaskComponent],
    imports: [CommonModule],
    exports: [TaskListComponent]
})

export class TaskListModule{

}