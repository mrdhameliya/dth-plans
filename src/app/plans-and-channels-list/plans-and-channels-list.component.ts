import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-and-channels-list',
  templateUrl: './plans-and-channels-list.component.html',
  styleUrls: ['./plans-and-channels-list.component.scss']
})
export class PlansAndChannelsListComponent implements OnInit {

  constructor(private route: Router) { }

  mainScreen() {
    this.route.navigate(['/subscribedList']);
  }

  ngOnInit(): void {
  }

}
