import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'https://your-api-url.com/api/Teacher'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  registerTeacher(teacher: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, teacher);
  }
}
