import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubscribedPlansAndChannelsComponent } from './subscribed-plans-and-channels/subscribed-plans-and-channels.component';
import { PlansAndChannelsListComponent } from './plans-and-channels-list/plans-and-channels-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SubscribedPlansAndChannelsComponent,
    PlansAndChannelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
