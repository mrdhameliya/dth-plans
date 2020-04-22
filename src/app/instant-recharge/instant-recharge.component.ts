import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dth-instant-recharge',
  templateUrl: './instant-recharge.component.html',
  styleUrls: ['./instant-recharge.component.scss']
})
export class InstantRechargeComponent implements OnInit {

  public click1 = 0;
  public click2 = 0;
  public block1 = true;
  public block2 = false;
  public block3 = false;


  vcNumber = new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]);

  constructor() { }

  ngOnInit(): void {
  }

  clickFun1() {
    this.click1 = 1;
    this.block1 = !this.block1;
    this.block2 = !this.block2;
  }

  toggle1() {
    if (this.click1 === 1) {
      this.block1 = !this.block1;
    }
  }

  clickFun2() {
    this.click2 = 1;
    this.block2 = !this.block2;
    this.block3 = !this.block3;
  }

  toggle2() {
    if (this.click1 === 1) {
      this.block2 = !this.block2;
    }
  }

  toggle3() {
    if (this.click2 === 1) {
      this.block3 = !this.block3;
    }
  }

}
