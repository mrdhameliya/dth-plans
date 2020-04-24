import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dth-plan-details-modal',
  templateUrl: './plan-details-modal.component.html',
  styleUrls: ['./plan-details-modal.component.scss']
})
export class PlanDetailsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlanDetailsModalComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

}
