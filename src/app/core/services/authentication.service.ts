import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { pipe, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) { }

  login(username: string, password: string) {
    return this.http.post<{token: string}>(`${environment.apiUrl}/login`,
    {
      username,
      password
    }).pipe(switchMap((res:any) => {
      this.setToken(res.token)
      return this.userService.getBootstrapData()
    }));
  }

  signup(data:any) {
    return this.http.post(`${environment.apiUrl}/users`, data)
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    const currentUser = this.userService.currentUserBehaviorSubject.value;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
