import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  // Initilization
  form: FormGroup;
  title: any;
  age: number = 10;
  subtitle: string = 'YO';
  genderList: any[] = [];
  
  signinForm: FormGroup = this.fb.group({
    name: null,
    email: ['', [Validators.required, Validators.email]],
    gender: [null, [Validators.required]],
  });
  // Initilization

  // Constructor
  constructor(private fb: FormBuilder) {
    // Declaration
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      password: [null,[Validators.required]],
    });
    // Declaration
    console.log('constructior');
  }

  // Constructor

  // Life cycle hooks

  ngOnInit() {
    console.log('ngoninit');
    this.form.reset();
    this.signinForm.reset();
    this.title = "SignUp";
    this.age = 12;
    this.subtitle = 'fsdfsdfsdfsdf';
    this.genderList = [
      {
        id: 1,
        name: 'Male',
      },
      {
        id: 2,
        name: 'Female',
      },
      {
        id: 3,
        name: 'Other',
      },
    ];
  }

  // Life cycle hooks

  // Functions --

  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }
  handleClick() {
    this.form.markAllAsTouched();
    console.log('Button clicked!');
    this.title = 'Successfull Clicked';
    console.log('form value', this.form.value);
  }
}
