import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  host: {
    class: 'task-list'
  },
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  tasks:Array<any>;

  constructor() {
    this.tasks = [
      {title: 'zadanie1', done: false},
      {title: 'zadanie2', done: true}
    ]
   }

  ngOnInit() {
  }

}
