import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent implements OnInit{
 
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
   

  ngOnInit(): void {};


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  async login(): Promise<void> {
    const user = { email: this.email?.value, password: this.password?.value };

    const res = await this.authService.login(user)
    if (await this.authService.login(user)) {
      alert('Success.');
      this.router.navigate(['/dashboard']); // Navigate to the dashboard
    } else {
      alert('Invalid username or password.');
    }
  }

}
