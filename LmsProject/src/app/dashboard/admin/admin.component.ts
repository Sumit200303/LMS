// admin-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCrudComponent } from '../../Crud/student-crud/student-crud.component';
import { TeacherCrudComponent } from '../../Crud/teacher-crud/teacher-crud.component';
import { ApproveUserComponent } from "../../Approve/apporve-user/apporve-user.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, StudentCrudComponent, TeacherCrudComponent, ApproveUserComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  currentView: 'approve' | 'student-crud' | 'teacher-crud' = 'approve';

  showView(view: 'approve' | 'student-crud' | 'teacher-crud') {
    this.currentView = view;
  }
}
