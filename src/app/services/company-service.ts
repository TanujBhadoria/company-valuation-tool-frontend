import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  private baseUrl = 'http://localhost:8082/api/company';

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl);
  }

  getCompanyByTicker(ticker: string): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${ticker}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, company);
  }
}
