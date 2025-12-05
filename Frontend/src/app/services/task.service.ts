import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
  }

  // 🔹 Obtener tareas pendientes
  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pendientes`, this.getHeaders());
  }

  // 🔹 Obtener tareas completas
  getCompletedTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/completas`, this.getHeaders());
  }

  // 🔹 Crear nueva tarea
  createTask(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, this.getHeaders());
  }

  // 🔹 Editar tarea
  updateTask(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data, this.getHeaders());
  }

  // 🔹 Eliminar tarea
  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  getTask(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getHeaders());
  }

}
