import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SecurityQuestion } from '../models/security-questions.model';
import { MustMatch } from '../custom-helper/password-match.validator';

@Component({
  selector: 'dth-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  securityQuestions: SecurityQuestion[] = [
    { id: 1, securityQuestion: 'First car you own' },
    { id: 2, securityQuestion: 'Your first school name' },
    { id: 3, securityQuestion: 'Your pet name' },
    { id: 4, securityQuestion: 'Your favourite crickter' }
  ];

  constructor(private fb: FormBuilder) { }

  customerRegistrationForm = this.fb.group({
    vcNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
    mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    alternateMobileNumber: ['', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    securityQuestion: ['', [Validators.required]],
    answer: ['', [Validators.required, Validators.minLength(2)]]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.customerRegistrationForm.value);
  }

  get f() {
    return this.customerRegistrationForm.controls;
  }

}
