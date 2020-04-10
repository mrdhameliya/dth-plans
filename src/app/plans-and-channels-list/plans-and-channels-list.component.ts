import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlansFields } from '../plans-fields';
import { ChannelsService } from '../channels.service';
import { ChannelsFields } from '../channels-fields';

@Component({
  selector: 'app-plans-and-channels-list',
  templateUrl: './plans-and-channels-list.component.html',
  styleUrls: ['./plans-and-channels-list.component.scss']
})
export class PlansAndChannelsListComponent implements OnInit {

  total = 0;
  count = 0;
  plans: PlansFields[];
  channels: ChannelsFields[];

  selectedPlan: any = {};
  selectedChannel: any = {};
  preview: boolean;
  display = false;

  planData: any;
  channelData: any;

  constructor(
    private route: Router,
    private channelService: ChannelsService
  ) { }

  mainScreen() {
    this.route.navigate(['/subscribedList']);
  }

  ngOnInit(): void {
    this.plans = this.channelService.getPlans();
    this.channels = this.channelService.getChannels();
  }

  onPlanSelected(val: PlansFields) {
    this.planData = val;
  }

  onChannelSelected(val: ChannelsFields) {
    this.channelData = val;
  }
  planAddButton() {
    this.total = this.total + this.planData.planPrice;
    // this.count = this.count + 1;
    // console.log(this.count);
    this.display = true;
  }
  planClearButton() {
    this.total = this.total - this.planData.planPrice;
    // this.count = this.count--;
    // console.log(this.count);
  }

  channelAddButton() {
    this.total = this.total + this.channelData.planPrice;
  }
  channelClearButton() {
    this.total = this.total - this.channelData.planPrice;
  }
}
