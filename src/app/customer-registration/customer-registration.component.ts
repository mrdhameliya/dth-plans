import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  customerRegistrationForm = this.fb.group({
    vcNumber: ['', Validators.required],
    mobileNumber: [''],
    email: [''],
    alternateMobileNumber: [''],
    password: [''],
    confirmPassword: [''],
    securityQuestion: [''],
    answer: ['']
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.customerRegistrationForm.value);
  }
}
