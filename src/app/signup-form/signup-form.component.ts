import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  //Property for the gender
  private gender: string[];
  //Property for the user
  private user: User;

  signupForm: FormGroup;

  ngOnInit() {
    console.log('ngOnInit');
    this.gender = ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User();
    // this.user = new User({
    //   email: "", password: { pwd: "", confirm: "" },
    //   gender: this.gender[0], terms: false
    // });

    this.signupForm = new FormGroup({

      "email": new FormControl(),
      "gender": new FormControl(),
      "password": new FormGroup({
        pwd: new FormControl(),
        confirm: new FormControl()
      }),
      "terms": new FormControl(),
    });
  }

  constructor() { console.log('constructor'); }

  public onFormSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    console.log("valid: " + valid);
  }
}