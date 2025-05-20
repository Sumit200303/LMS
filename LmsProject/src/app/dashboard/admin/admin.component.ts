import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApproveUsersComponent } from '../../Approve/approve-user/approve-user.component';
import { StudentCrudComponent } from '../../Crud/student-crud/student-crud.component';
import { TeacherCrudComponent } from '../../Crud/teacher-crud/teacher-crud.component';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ApproveUsersComponent,
  StudentCrudComponent,
  TeacherCrudComponent
  ],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  currentView: 'approve' | 'student-crud' | 'teacher-crud' = 'approve';

  showApproveUsers() {
    this.currentView = 'approve';
  }

  showStudentCrud() {
    this.currentView = 'student-crud';
  }

  showTeacherCrud() {
    this.currentView = 'teacher-crud';
  }
}
