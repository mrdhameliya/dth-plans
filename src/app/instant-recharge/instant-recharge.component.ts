import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dth-instant-recharge',
  templateUrl: './instant-recharge.component.html',
  styleUrls: ['./instant-recharge.component.scss']
})
export class InstantRechargeComponent implements OnInit {

  vcNumber = new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]);

  constructor() { }

  ngOnInit(): void {
  }

}
