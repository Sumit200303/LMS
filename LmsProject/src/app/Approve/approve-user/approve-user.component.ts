import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-approve-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // <-- add HttpClientModule here
  template: `
    <h2>Approve Students</h2>
    <ul>
      <li *ngFor="let student of pendingStudents">
        {{student.name}} - {{student.emailId}}
        <button (click)="approveStudent(student.id)">Approve</button>
      </li>
    </ul>

    <h2>Approve Teachers</h2>
    <ul>
      <li *ngFor="let teacher of pendingTeachers">
        {{teacher.name}} - {{teacher.emailId}}
        <button (click)="approveTeacher(teacher.id)">Approve</button>
      </li>
    </ul>
  `
})
export class ApproveUsersComponent implements OnInit {
  pendingStudents: any[] = [];
  pendingTeachers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPendingStudents();
    this.loadPendingTeachers();
  }

  loadPendingStudents() {
    this.http.get<any[]>('https://localhost:7186/api/Admin/approve-student').subscribe(data => {
      this.pendingStudents = data;
    });
  }

  loadPendingTeachers() {
    this.http.get<any[]>('https://localhost:7186/api/Admin/pending-teachers').subscribe(data => {
      this.pendingTeachers = data;
    });
  }

  approveStudent(id: number) {
    this.http.post(`https://localhost:7186/api/Admin/approve-student/${id}`, {}).subscribe(() => {
      alert('Student approved!');
      this.loadPendingStudents();
    }, () => alert('Error approving student'));
  }

  approveTeacher(id: number) {
    this.http.post(`https://localhost:7186/api/Admin/approve-teacher/${id}`, {}).subscribe(() => {
      alert('Teacher approved!');
      this.loadPendingTeachers();
    }, () => alert('Error approving teacher'));
  }
}
