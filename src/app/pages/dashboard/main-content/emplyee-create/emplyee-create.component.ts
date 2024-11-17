import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
}

@Component({
  selector: 'app-emplyee-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './emplyee-create.component.html',
  styleUrl: './emplyee-create.component.css'
})
export class EmplyeeCreateComponent {
  UserForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    // Initialize form group
    this.UserForm = this.formbuilder.group({
      lastName: ['', [Validators.required]], // Name field with validation
      age: ['', Validators.required],
      phone: ['', [Validators.required]], // phone field (must be a number)
    });
  }

  ngOnInit(): void { }

  // Method to handle form submission
  async onSubmit() {
    if (this.UserForm.valid) {
      try {
        const res = await fetch('api//users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lastName: this.UserForm.value.lastName,
            age: this.UserForm.value.age,
            phone: this.UserForm.value.phone,
          })
        })

        const data = await res.json();
        window.location.reload();
        console.log(data);


      } catch (error) {
        console.error('Error during add user:', error);
      }


      console.log('Form Data:', this.UserForm.value);
      // Add logic to handle form data here, e.g., send it to a server
    } else {
      console.log('Form is invalid');
    }
  }

}
