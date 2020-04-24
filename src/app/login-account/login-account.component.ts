import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'dth-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent implements OnInit {

  submitted = false;

  loginForm = this.fb.group({
    vcNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
    mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    otp: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    console.warn(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    alert('Login Successfully!');
    this.route.navigate(['/plans-list']);
  }

}

