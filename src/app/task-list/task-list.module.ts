import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task/task.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';
import { UIModule } from '../ui/ui.module';


@NgModule({
    declarations: [TaskListComponent, TaskComponent, EnterTaskComponent],
    imports: [CommonModule, UIModule],
    exports: [TaskListComponent]
})

export class TaskListModule{

}