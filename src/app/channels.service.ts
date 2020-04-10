import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChannelsFields } from './channels-fields';
import { Observable } from 'rxjs';
import { CHANNELS } from './mock-channels';
import { PlansFields } from './plans-fields';
import { PLANS } from './mock-plans';

@Injectable()
export class ChannelsService {

    private channelsUrl = 'api/channels';

    constructor(
        private http: HttpClient) { }

    getChannel(): Observable<ChannelsFields[]> {
        return this.http.get<ChannelsFields[]>(this.channelsUrl);
    }

    getChannels(): ChannelsFields[] {
        return CHANNELS;
    }

    getPlans(): PlansFields[] {
        return PLANS;
    }
}
