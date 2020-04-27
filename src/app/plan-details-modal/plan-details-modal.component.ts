import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChannelsService } from '../services/channels.service';
import { CategoryFields, CategoryChannelFields } from '../channels-list-fields';
import { ChannelsFields } from '../channels-fields';

@Component({
  selector: 'dth-plan-details-modal',
  templateUrl: './plan-details-modal.component.html',
  styleUrls: ['./plan-details-modal.component.scss']
})
export class PlanDetailsModalComponent implements OnInit {

  categoryLists: CategoryFields[];
  channelLists: CategoryChannelFields[];

  constructor(
    public dialogRef: MatDialogRef<PlanDetailsModalComponent>,
    private channelService: ChannelsService
  ) { }

  ngOnInit(): void {
    this.categoryLists = this.channelService.getCategoryList();
    this.channelLists = this.channelService.getChannelsList();
  }

  onClose() {
    this.dialogRef.close();
  }

}
