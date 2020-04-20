import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { SecurityQuestion } from '../models/security-questions.model';
import { MustMatch } from '../custom-helper/password-match.validator';
import { ChannelsService } from '../services/channels.service';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'dth-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  customer: Customer[];

  securityQuestions: SecurityQuestion[] = [
    { id: 1, securityQuestion: 'First car you own' },
    { id: 2, securityQuestion: 'Your first school name' },
    { id: 3, securityQuestion: 'Your pet name' },
    { id: 4, securityQuestion: 'Your favourite crickter' }
  ];

  constructor(
    private fb: FormBuilder,
    public channelService: ChannelsService,
    public route: Router) { }

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
    this.channelService.save(this.customerRegistrationForm.value).subscribe(data => {
      // this.customer = data;
      console.log(this.customer);
    });
  }

  setDefault() {
    this.customerRegistrationForm.patchValue({
      vcNumber: 180021153333,
      mobileNumber: 9879876565,
      email: 'email@gmail.com',
      alternateMobileNumber: 9898556655,
      password: 987654321,
      confirmPassword: 987654321,
      securityQuestion: this.securityQuestions[0],
      answer: 'BMW'
    });
  }

  get f() {
    return this.customerRegistrationForm.controls;
  }

}
