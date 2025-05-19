import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'https://localhost:yourport/api/Admin';

  constructor(private http: HttpClient) {}

  login(admin: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, admin);
  }

  approveTeacher(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/approve-teacher/${id}`, {});
  }

  getPendingTeachers(): Observable<any> {
    return this.http.get('https://localhost:yourport/api/Teacher/pending');
  }
}
