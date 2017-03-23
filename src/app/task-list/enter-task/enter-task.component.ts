import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'enter-task'
  },
})
export class EnterTaskComponent implements OnInit {

  @Output() taskEntered = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enterTask(titleInput){
    this.taskEntered.next(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }

}
