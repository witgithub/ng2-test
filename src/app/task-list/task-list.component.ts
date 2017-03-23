import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { TaskListService } from './task-list.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  host: {
    class: 'task-list'
  },
  providers: [TaskListService],
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks: Array<any>;
  selectedTaskFilter;
  taskFilterList;
  taskListService;

  constructor(@Inject(TaskListService) taskListService) {
    this.taskListService = taskListService;
    this.taskFilterList = ['wszystkie', 'otwarte', 'wykonane'];
    this.selectedTaskFilter = 'wszystkie';
  }

  ngOnInit() {
  }

  getFilteredTasks() {
    return this.taskListService.tasks ? this.taskListService.tasks.filter((task) => {
      if (this.selectedTaskFilter === 'wszystkie') {
        return true;
      } else if (this.selectedTaskFilter === 'otwarte') {
        return !task.done;
      } else {
        return task.done;
      }
    }) : [];
  }

  addTask(title) {
    this.taskListService.tasks.push({
      title, done: false
    });
  }

}
