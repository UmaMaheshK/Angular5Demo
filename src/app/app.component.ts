import { Component, ViewChild, ElementRef } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //npm install ngx-bootstrap --save
  datepickerConfig: Partial<BsDatepickerConfig>;
  @ViewChild('myInputText') inputText: ElementRef;
  title = 'Uma Mahesh';
  private blnValue: boolean = false;
  //private testname:string=`${blnValue} testing`;
  sendDataToChild = 'I am from Parent component';
  receivedDataFromChild: string;
  private b: number;
  languages: any[] = [

    { 'name': 'Uma Mahesh', 'age': '37' },
    { 'name': 'Angular', 'age': '13' },
    { 'name': 'JavaScript', 'age': '11' },
    { 'name': 'Python', 'age': '10' },
  ];
  constructor() {
    this.datepickerConfig = Object.assign({}, {
      minDate: new Date(2000, 0, 1),
      // maxDate: new Date(),
      showWeekNumbers: false,
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD-MMMM-YYYY',
      rangeInputFormat: 'DD-MMMM-YYYY'
    });
    console.clear();
    // setInterval(() => this.send2Server(), 2000);
  }
  getValue(e) {
    console.log(e, ' we got the value');
  }

  send2Server() {
    console.log(this.inputText.nativeElement.value);
  }
  toogleClick() {
    console.log(this.blnValue);

    this.blnValue = !this.blnValue;
    this.sayHello().then(res => console.log(res)).catch((rej) => console.log(`Error is ${rej}`));
  }
  //Promises
  sayHello() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Helle Uma Mahesh'));
    });
  }
  multipleVariables() {
    let a, b, c: number = 10;
  }
}