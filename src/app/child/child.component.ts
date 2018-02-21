import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() myValue;
  @Output() myOutPut = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('my input values:= ', this.myValue);
    this.myOutPut.emit('I am from the child');
  }

}
