import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelsService } from '../channels.service';
import { ChannelsFields } from '../channels-fields';

@Component({
  selector: 'app-subscribed-plans-and-channels',
  templateUrl: './subscribed-plans-and-channels.component.html',
  styleUrls: ['./subscribed-plans-and-channels.component.scss']
})
export class SubscribedPlansAndChannelsComponent implements OnInit {

  channels: ChannelsFields[];

  constructor(
    private route: Router,
    private channelService: ChannelsService
  ) { }

  openList() {
    this.route.navigate(['/plansList']);
  }

  ngOnInit(): void {
    this.channels = this.channelService.getChannels();
  }

}
