import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="student-crud">
      <h2>Student Management</h2>

      <form (ngSubmit)="onSubmit()" #studentForm="ngForm">
        <input type="text" name="name" [(ngModel)]="student.name" placeholder="Name" required />
        <input type="email" name="email" [(ngModel)]="student.email" placeholder="Email" required />
        <button type="submit">{{ editMode ? 'Update' : 'Add' }}</button>
        <button type="button" (click)="resetForm()">Clear</button>
      </form>

      <ul>
        <li *ngFor="let s of students">
          {{ s.name }} - {{ s.email }}
          <button (click)="editStudent(s)">Edit</button>
          <button (click)="deleteStudent(s.id)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .student-crud {
      padding: 10px;
    }

    form {
      margin-bottom: 20px;
    }

    input {
      margin-right: 10px;
      padding: 6px;
    }

    button {
      margin-right: 8px;
      padding: 5px 12px;
    }

    li {
      margin-bottom: 10px;
    }
  `]
})
export class StudentCrudComponent {
  students = [
    { id: 1, name: 'Alice', email: 'alice@student.com' },
    { id: 2, name: 'Bob', email: 'bob@student.com' }
  ];

  student = { id: 0, name: '', email: '' };
  editMode = false;

  onSubmit() {
    if (this.editMode) {
      const index = this.students.findIndex(s => s.id === this.student.id);
      if (index > -1) this.students[index] = { ...this.student };
      alert('Student updated (frontend mock)');
    } else {
      const newId = Math.max(...this.students.map(s => s.id)) + 1;
      this.students.push({ ...this.student, id: newId });
      alert('Student added (frontend mock)');
    }
    this.resetForm();
  }

  editStudent(s: any) {
    this.student = { ...s };
    this.editMode = true;
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
    alert('Student deleted (frontend mock)');
  }

  resetForm() {
    this.student = { id: 0, name: '', email: '' };
    this.editMode = false;
  }
}
