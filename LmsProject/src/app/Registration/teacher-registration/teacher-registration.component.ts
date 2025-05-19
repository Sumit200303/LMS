import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';

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
    qualification: '',
  };

  registerTeacher() {
    if (!this.teacher.name || !this.teacher.email || !this.teacher.password || !this.teacher.address || !this.teacher.qualification) {
      alert('Please fill all fields!');
      return;
    }

    // TODO: call your registration API here

    console.log('Teacher Registration Data:', this.teacher);
    alert('Teacher Registered Successfully!');

    // Reset form after registration
    this.teacher = { name: '', email: '', password: '', address: '', qualification: '' };
  }


}
