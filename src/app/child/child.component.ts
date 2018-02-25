import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['myInputValue4'],
  outputs: ['eventData']
})
export class ChildComponent implements OnInit {
  @Input() myInputValue;
  @Input() myInputValue2;
  @Input() myInputValue3;

  public myInputValue4;
  @Output() myOutPut = new EventEmitter();
  eventData = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('my input values:= ', this.myInputValue);
    console.log('my input value2:= ', this.myInputValue2);
    console.log('my input value3:= ', this.myInputValue3);
    console.log('my input value4:= ', this.myInputValue4);
    this.myOutPut.emit('I am from the child');
  }
  onChange(newValue: string) {
    console.clear();
    console.log(newValue);
    this.eventData.emit(newValue);
  }
}
