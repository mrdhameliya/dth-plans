import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribed-plans-and-channels',
  templateUrl: './subscribed-plans-and-channels.component.html',
  styleUrls: ['./subscribed-plans-and-channels.component.scss']
})
export class SubscribedPlansAndChannelsComponent implements OnInit {

  constructor(private route: Router) { }

  openList() {
    this.route.navigate(['/plansList']);
  }

  ngOnInit(): void {
  }

}
