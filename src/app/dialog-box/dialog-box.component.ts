import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SubscribedPlansAndChannelsComponent } from '../subscribed-plans-and-channels/subscribed-plans-and-channels.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>
  ) { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.dialogRef.close(SubscribedPlansAndChannelsComponent);
  }
}
