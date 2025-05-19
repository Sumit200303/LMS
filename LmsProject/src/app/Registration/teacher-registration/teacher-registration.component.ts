import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './teacher-registration.component.html',
  styleUrl: './teacher-registration.component.css'
})
export class TeacherRegistrationComponent {

teacher = {
    name: '',
    email: '',
    password: '',
    address: '',
    qualification: ''
  };

  constructor(private teacherService: TeacherService) {}

  registerTeacher() {
    this.teacherService.registerTeacher(this.teacher).subscribe({
      next: (res) => {
        alert('Teacher registered successfully!');
        console.log(res);
      },
      error: (err) => {
        alert('Registration failed.');
        console.error(err);
      }
    });
  }


}
