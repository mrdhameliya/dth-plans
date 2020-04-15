import { SubscribedPlansAndChannelsComponent } from './subscribed-plans-and-channels/subscribed-plans-and-channels.component';
import { PlansAndChannelsListComponent } from './plans-and-channels-list/plans-and-channels-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginAccountComponent } from './login-account/login-account.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

const routes: Routes = [
    { path: '', redirectTo: '/home-screen', pathMatch: 'full' },
    { path: 'home-screen', component: HomeScreenComponent },
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
