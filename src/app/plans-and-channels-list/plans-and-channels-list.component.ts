import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlansFields } from '../plans-fields';
import { ChannelsService } from '../services/channels.service';
import { ChannelsFields } from '../channels-fields';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../services/dialog.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'dth-plans-and-channels-list',
  templateUrl: './plans-and-channels-list.component.html',
  styleUrls: ['./plans-and-channels-list.component.scss']
})
export class PlansAndChannelsListComponent implements OnInit {

  total = 0;
  planAddClick = 0;
  channelAddClick = 0;
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
      console.log('Popup closed')
    });
  }


  ngOnInit(): void {
    this.plans = this.channelService.getPlans();
    this.channels = this.channelService.getChannels();
  }

  planAddButton(planData: number) {
    this.total = this.total + planData;
    this.planAddClick = this.planAddClick + 1;
    console.log(this.total);
    console.log(planData);
  }

  channelAddButton(channelData: number) {
    this.total = this.total + channelData;
    this.channelAddClick = this.channelAddClick + 1;
  }

  clearTotal() {
    this.total = 0;
  }
}
