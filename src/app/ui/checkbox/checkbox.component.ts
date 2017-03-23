import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  host:{
    class: 'checkbox'
  },
  styleUrls: ['./checkbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  @Input() label;
  @Input() checked;

  @Output() checkedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCheckedChange(checked) {
    this.checkedChange.next(checked);
  }
}
