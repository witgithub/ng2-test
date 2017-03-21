import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  host: {
    class: 'task'
  },
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input() task;

  constructor() { }

  ngOnInit() {
  }

}
