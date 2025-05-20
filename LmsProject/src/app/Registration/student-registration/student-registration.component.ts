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
    Name: "",
  EmailId: "",
  Password: "",
  Address: ""
  };

  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient) {}

  registerStudent() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.student.Name || !this.student.EmailId || !this.student.Password || !this.student.Address) {
      this.errorMessage = 'Please fill all the fields.';
      return;
    }

    // Call backend API (adjust URL)
  this.http.post('https://localhost:7186/api/Student', this.student, { responseType: 'text' })
  .subscribe({
    next: (res) => {
      this.successMessage = res; // res is plain text here
      this.student = { Name: '', EmailId: '', Password: '', Address: '' };
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.error || 'Registration failed.';
    }
  });

  }
}
