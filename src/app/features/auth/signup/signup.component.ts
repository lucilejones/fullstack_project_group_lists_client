import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required)
  })

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) {}

  onSignup() {
    const formValue = this.signupForm.value
    this.authService.signup(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/login'])
      },
      error: (error:any) => {
        console.log(error.error)
      }
    })
  }
}
