import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 // ✅ Check path

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  // ✅ Only "/Teacher", NOT "/Teacher/register"
  

  // constructor(private http: HttpClient) {}

  // registerTeacher(teacher: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, teacher); // ✅ Makes: /api/Teacher/register
  // }
}
