import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private userRole: string = '';
  private token: string = '';
  router: any;

  constructor(private http: HttpClient) {}


  

  login(data: any): Observable<any> {
    return this.http.post('https://localhost:7116/api/Token', data);
  }

  register(data: any): Observable<any> {
    return this.http.post('https://localhost:7116/api/Users', data);
  }

  getUserRole(): string {
    return this.userRole;
  }

  setUserRole(role: string): void {
    this.userRole = role;
  }

  clearUserRole(): void {
    this.userRole = '';
  }

  setToken(token: string): void {
    this.token = token;
  }

  clearToken(): void {
    this.token = '';
  }

  hasValidToken(): boolean {
    if (this.token) {
      const decodedToken: any = jwt_decode(this.token);
      const expirationDate = decodedToken.exp * 1000; // Convert expiration time to milliseconds
      const currentTime = Date.now();
      return currentTime < expirationDate;
    }
    return false;
  }

  fetchUserRole(): Observable<any> {
    return this.http.get('https://localhost:7116/api/Users', { headers: { 'Authorization': `Bearer ${this.token}` } });
  }

  isLoggedIn(): boolean {
    return this.hasValidToken();
  }

  redirectToRoleComponent(): void {
    switch (this.userRole) {
      case 'admin':
        this.router.navigateByUrl('/admin');
        break;
      case 'doctor':
        this.router.navigateByUrl('/doctor');
        break;
      case 'patient':
        this.router.navigateByUrl('/patient');
        break;
      default:
        alert("Invalid role");
        break;
    }
  }
}
