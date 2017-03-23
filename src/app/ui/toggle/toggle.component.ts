import {Component, Input, Output, ViewEncapsulation, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  host: {
    class: 'toggle'
  },
  encapsulation: ViewEncapsulation.None
})
export class ToggleComponent implements OnInit {

  @Input() buttonList;
  @Input() selectedButton;
  @Output() selectedButtonChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.selectedButton === undefined) {
      this.selectedButton = this.buttonList[0];
    }
  }

  onButtonActivate(button) {
    this.selectedButton = button;
    this.selectedButtonChange.next(button);
  }

}
