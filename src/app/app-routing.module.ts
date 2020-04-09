import { SubscribedPlansAndChannelsComponent } from './subscribed-plans-and-channels/subscribed-plans-and-channels.component';
import { PlansAndChannelsListComponent } from './plans-and-channels-list/plans-and-channels-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/subscribedList', pathMatch: 'full' },
    { path: 'subscribedList', component: SubscribedPlansAndChannelsComponent },
    { path: 'plansList', component: PlansAndChannelsListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
