import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelsService } from '../channels.service';
import { ChannelsFields } from '../channels-fields';
import { PlansFields } from '../plans-fields';

@Component({
  selector: 'app-subscribed-plans-and-channels',
  templateUrl: './subscribed-plans-and-channels.component.html',
  styleUrls: ['./subscribed-plans-and-channels.component.scss']
})
export class SubscribedPlansAndChannelsComponent implements OnInit {

  plans: PlansFields[];
  channels: ChannelsFields[];

  constructor(
    private route: Router,
    private channelService: ChannelsService
  ) { }

  openList() {
    this.route.navigate(['/plans-list']);
  }

  ngOnInit(): void {
    this.plans = this.channelService.getPlans();
    this.channels = this.channelService.getChannels();
  }

}
