import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlueColorDirective } from './blue-color.directive';
import { ChildComponent } from './child/child.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
// import { FormsModule } from '@angular/forms';
import { FormsModule, FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlueColorDirective,
    ChildComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
