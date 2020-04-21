import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChannelsFields } from '../channels-fields';
import { Observable, throwError } from 'rxjs';
import { CHANNELS } from '../mock-channels';
import { PlansFields } from '../plans-fields';
import { PLANS } from '../mock-plans';
import { Customer } from '../models/customer.model';
import { CUSTOMER } from '../mock-customer';


@Injectable()
export class ChannelsService {

    private channelsUrl = 'url';

    constructor(
        private http: HttpClient) { }

    getChannels(): ChannelsFields[] {
        return CHANNELS;
    }

    getPlans(): PlansFields[] {
        return PLANS;
    }

    getCustomer(): Customer[] {
        return CUSTOMER;
    }

    save(customer: Customer): Observable<Customer> {
        if (customer.customerId == null) {
            return this.http
                .post<Customer>('this.channelsUrl', customer, {
                    headers: new HttpHeaders({
                        'Content-type': 'application/json'
                    })
                });
        }
    }

    handleError(error: any) {
        console.error(error);
        return throwError(error);
      }
}
