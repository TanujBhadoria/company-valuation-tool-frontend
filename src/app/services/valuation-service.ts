import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DcfRequest, DcfResponse } from '../models/dcf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValuationService {
  private baseUrl = 'http://localhost:8082/api/valuation';

  constructor(private http : HttpClient){}

  calculateDcf(ticker : string , request :DcfRequest): Observable<DcfResponse>{
    return this.http.post<DcfResponse>(`${this.baseUrl}/dcf/${ticker}`,request);
  }
}
