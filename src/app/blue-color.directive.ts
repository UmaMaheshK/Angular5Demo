//import { element } from 'protractor';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(ele: ElementRef) {
    ele.nativeElement.style.color = 'blue';
  }

}
