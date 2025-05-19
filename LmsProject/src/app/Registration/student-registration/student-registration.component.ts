import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent {
  student = {
    name: '',
    email: '',
    password: '',
    address: '',
  };

  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient) {}

  registerStudent() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.student.name || !this.student.email || !this.student.password || !this.student.address) {
      this.errorMessage = 'Please fill all the fields.';
      return;
    }

    // Call backend API (adjust URL)
    this.http.post('https://your-backend-url/api/students', this.student).subscribe({
      next: (response) => {
        this.successMessage = 'Registration successful!';
        this.student = { name: '', email: '', password: '', address: '' }; // reset form
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error?.message || 'Something went wrong. Please try again.';
      },
    });
  }
}
