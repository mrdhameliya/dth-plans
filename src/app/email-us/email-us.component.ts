import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dth-email-us',
  templateUrl: './email-us.component.html',
  styleUrls: ['./email-us.component.scss']
})
export class EmailUsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  emailUsForm = this.fb.group ({
    mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    alternateMobileNumber: ['', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    state: [],
    description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1500)]],
  });

  ngOnInit(): void {
  }

  get f() {
    return this.emailUsForm.controls;
  }

}
