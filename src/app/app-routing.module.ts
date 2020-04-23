import { SubscribedPlansAndChannelsComponent } from './subscribed-plans-and-channels/subscribed-plans-and-channels.component';
import { PlansAndChannelsListComponent } from './plans-and-channels-list/plans-and-channels-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginAccountComponent } from './login-account/login-account.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { MainScreenContentComponent } from './main-screen-content/main-screen-content.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { InstantRechargeComponent } from './instant-recharge/instant-recharge.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EmailUsComponent } from './email-us/email-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
    { path: '', redirectTo: '/main-screen-content', pathMatch: 'full' },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'email-us', component: EmailUsComponent },
    { path: 'contact-info', component: ContactInfoComponent },
    { path: 'instant-recharge', component: InstantRechargeComponent },
    { path: 'customer-profile', component: CustomerProfileComponent },
    { path: 'main-screen-content', component: MainScreenContentComponent },
    { path: 'home-screen', component: MainScreenContentComponent },
    { path: 'subscribed-list', component: SubscribedPlansAndChannelsComponent },
    { path: 'plans-list', component: PlansAndChannelsListComponent },
    { path: 'login-account', component: LoginAccountComponent },
    { path: 'customer-registration', component: CustomerRegistrationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
