import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(nombre: string, correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      nombre,
      correo,
      contrasena
    });
  }

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo, contrasena }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
