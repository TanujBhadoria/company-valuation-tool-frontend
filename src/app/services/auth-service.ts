import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest, AuthResponse } from '../models/auth';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8082/api/auth';
  private tokenKey = 'auth_token';

  constructor(private http : HttpClient){}

  register(request: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`s${this.baseUrl}/register`,request).pipe(
      tap(response => this.saveToken(response.token))
    );
  }

  login(request:AuthRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`,request).pipe(
      tap(response => this.saveToken(response.token))
    );
  }
  
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string |null {
    return localStorage.getItem(this.tokenKey);
  }

   isLoggedIn(): boolean {
     return !!this.getToken();
  }
  logout():void {
    localStorage.removeItem(this.tokenKey);
  }

}
