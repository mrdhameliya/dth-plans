import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlansFields } from '../plans-fields';
import { ChannelsService } from '../services/channels.service';
import { ChannelsFields } from '../channels-fields';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../services/dialog.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { PlanDetailsModalComponent } from '../plan-details-modal/plan-details-modal.component';

@Component({
  selector: 'dth-plans-and-channels-list',
  templateUrl: './plans-and-channels-list.component.html',
  styleUrls: ['./plans-and-channels-list.component.scss']
})
export class PlansAndChannelsListComponent implements OnInit {

  total = 0;
  plans: PlansFields[];
  channels: ChannelsFields[];

  planData: any;
  channelData: any;
  priceValue: number;

  constructor(
    private route: Router,
    private channelService: ChannelsService,
    public dialog: MatDialog,
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Popup closed');
    });
  }


  ngOnInit(): void {
    this.plans = this.channelService.getPlans();
    this.channels = this.channelService.getChannels();
  }

  planAddButton(planData: number) {
    this.total = this.total + planData;
    console.log(this.total);
    console.log(planData);
  }

  channelAddButton(channelData: number) {
    this.total = this.total + channelData;
  }

  openModal(index: number) {
    // if (index === 0){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.width = '800px';
      dialogConfig.height = '500px';
      this.dialog.open(PlanDetailsModalComponent, dialogConfig);
    // }
  }

  clearTotal() {
    this.total = 0;
  }
}
