import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Customer } from '../models/customer.model';
import { ChannelsService } from '../services/channels.service';
import { SecurityQuestion } from '../models/security-questions.model';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';

@Component({
  selector: 'dth-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

 @ViewChild('mainForm')
 mainForm: CustomerRegistrationComponent;

  customer: Customer[];

  securityQuestions: SecurityQuestion[] = [
    { id: 1, securityQuestion: 'First car you own' },
    { id: 2, securityQuestion: 'Your first school name' },
    { id: 3, securityQuestion: 'Your pet name' },
    { id: 4, securityQuestion: 'Your favourite crickter' }
  ];

  constructor(private channelService: ChannelsService) { }

  ngOnInit(): void {
    this.customer = this.channelService.getCustomer();
    console.log(this.customer);
  }

  setDefault() {
    this.mainForm.customerRegistrationForm.patchValue({
      vcNumber: 180021153333,
      mobileNumber: 9879876565,
      email: 'email@gmail.com',
      alternateMobileNumber: 9898556655,
      password: '987654321',
      confirmPassword: '987654321',
      securityQuestion: this.securityQuestions[0],
      answer: 'BMW'
    });
  }
}
