import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  orderForm: FormGroup;
  items: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([this.createItem()])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    console.log('Hello');
    this.items = (this.orderForm.get('items') as FormArray) as any;
    this.items.push(this.createItem());
  }
  public onFormSubmit({ value, valid }: { value: any, valid: boolean }) {
    // this.user = value;
    console.log(value);
    console.log("valid: " + valid);
  }
}
