import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Teacher Management</h2>

    <form (ngSubmit)="saveTeacher()">
      <input type="text" placeholder="Name" [(ngModel)]="form.name" name="name" required />
      <input type="email" placeholder="Email" [(ngModel)]="form.emailId" name="emailId" required />
      <input type="text" placeholder="Subject" [(ngModel)]="form.subject" name="subject" required />
      <button type="submit">{{ form.id ? 'Update' : 'Add' }}</button>
      <button type="button" (click)="resetForm()">Clear</button>
    </form>

    <ul>
      <li *ngFor="let teacher of teachers">
        {{teacher.name}} - {{teacher.emailId}} - {{teacher.subject}}
        <button (click)="editTeacher(teacher)">Edit</button>
        <button (click)="deleteTeacher(teacher.id)">Delete</button>
      </li>
    </ul>
  `
})
export class TeacherCrudComponent implements OnInit {
  teachers: any[] = [];
  form = { id: null, name: '', emailId: '', subject: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.http.get<any[]>('https://localhost:7186/api/Teacher').subscribe(data => {
      this.teachers = data;
    });
  }

  saveTeacher() {
    if (this.form.id) {
      // Update teacher
      this.http.put(`https://localhost:7186/api/Teacher/${this.form.id}`, this.form).subscribe(() => {
        this.loadTeachers();
        this.resetForm();
      });
    } else {
      // Add teacher
      this.http.post('https://localhost:7186/api/Teacher', this.form).subscribe(() => {
        this.loadTeachers();
        this.resetForm();
      });
    }
  }

  editTeacher(teacher: any) {
    this.form = { ...teacher };
  }

  deleteTeacher(id: number) {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.http.delete(`https://localhost:7186/api/Teacher/${id}`).subscribe(() => {
        this.loadTeachers();
      });
    }
  }

  resetForm() {
    this.form = { id: null, name: '', emailId: '', subject: '' };
  }
}
