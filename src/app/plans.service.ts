import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PlansFields } from './plans-fields';

@Injectable()
export class PlansService {

    private plansUrl = 'api/plans';

    constructor(
        private http: HttpClient) { }

    //    GET plans from the mock-data
    getPlans(): Observable<PlansFields[]> {
        return this.http.get<PlansFields[]>(this.plansUrl);
    }
}
