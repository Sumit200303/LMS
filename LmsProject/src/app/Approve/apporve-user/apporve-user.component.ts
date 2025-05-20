import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-approve-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './apporve-user.component.html',
  styleUrls: ['./apporve-user.component.css']
})
export class ApproveUserComponent implements OnInit {
  pendingStudents: any[] = [];
  pendingTeachers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPendingStudents();
    this.loadPendingTeachers();
  }

  loadPendingStudents() {
    // Replace with actual API later
    this.pendingStudents = [
      { id: 1, name: 'Student One', emailId: 's1@mail.com' },
      { id: 2, name: 'Student Two', emailId: 's2@mail.com' }
    ];
  }

  loadPendingTeachers() {
    // Replace with actual API later
    this.pendingTeachers = [
      { id: 1, name: 'Teacher One', emailId: 't1@mail.com' },
      { id: 2, name: 'Teacher Two', emailId: 't2@mail.com' }
    ];
  }

  approveStudent(id: number) {
    alert(`Student ID ${id} approved!`);
  }

  approveTeacher(id: number) {
    alert(`Teacher ID ${id} approved!`);
  }
}
