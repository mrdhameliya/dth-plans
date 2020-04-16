import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubscribedPlansAndChannelsComponent } from './subscribed-plans-and-channels/subscribed-plans-and-channels.component';
import { PlansAndChannelsListComponent } from './plans-and-channels-list/plans-and-channels-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelsService } from './channels.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DialogService } from './dialog.service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginAccountComponent } from './login-account/login-account.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { MainScreenContentComponent } from './main-screen-content/main-screen-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribedPlansAndChannelsComponent,
    PlansAndChannelsListComponent,
    DialogBoxComponent,
    HomeScreenComponent,
    LoginAccountComponent,
    CustomerRegistrationComponent,
    MainScreenContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],

  entryComponents: [
    DialogBoxComponent,
  ],
  providers: [
    ChannelsService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
