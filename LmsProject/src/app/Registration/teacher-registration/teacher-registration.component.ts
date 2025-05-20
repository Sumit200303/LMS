import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="register-container">
      <h2>Teacher Registration</h2>
      <form (ngSubmit)="register()" #registerForm="ngForm" novalidate>

        <label for="name">Name</label>
        <input id="name" name="name" type="text" [(ngModel)]="name" required />

        <label for="emailId">Email</label>
        <input id="emailId" name="emailId" type="email" [(ngModel)]="emailId" required />

        <label for="password">Password</label>
        <input id="password" name="password" type="password" [(ngModel)]="password" required minlength="6" />

        <label for="address">Address</label>
        <input id="address" name="address" type="text" [(ngModel)]="address" required />

        <label for="qualification">Qualification</label>
        <input id="qualification" name="qualification" type="text" [(ngModel)]="qualification" required />

        <button type="submit" [disabled]="registerForm.invalid">Register</button>
      </form>

      <div *ngIf="showPopup" class="popup">
        {{ popupMessage }}
      </div>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: 40px auto;
      padding: 25px;
      background: #f0f4f8;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
    }
    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-top: 12px;
      font-weight: 600;
      color: #555;
    }
    input {
      width: 100%;
      padding: 8px 10px;
      margin-top: 6px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }
    input:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 3px #007bff;
    }
    button {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      font-size: 16px;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }
    button:disabled {
      background-color: #a0c4ff;
      cursor: not-allowed;
    }
    button:hover:not(:disabled) {
      background-color: #0056b3;
    }
    .popup {
      margin-top: 20px;
      padding: 12px;
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
      color: #155724;
      font-weight: 600;
      text-align: center;
      animation: fadeInOut 3s forwards;
    }
    @keyframes fadeInOut {
      0% { opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { opacity: 0; }
    }
  `]
})
export class TeacherRegistrationComponent {
  name = '';
  emailId = '';
  password = '';
  address = '';
  qualification = '';

  showPopup = false;
  popupMessage = '';

  constructor(private http: HttpClient) {}

  register() {
    const payload = {
      name: this.name,
      emailId: this.emailId,
      password: this.password,
      address: this.address,
      qualification: this.qualification,
    };

    this.http.post('https://localhost:7186/api/Teacher/register', payload)
      .subscribe({
        next: () => {
          this.popupMessage = 'Registration successful. Pending admin approval.';
          this.showPopup = true;
          this.resetForm();
          setTimeout(() => this.showPopup = false, 3000);
        },
        error: (err) => {
          this.popupMessage = err.error || 'Registration failed.';
          this.showPopup = true;
          setTimeout(() => this.showPopup = false, 3000);
        }
      });
  }

  resetForm() {
    this.name = '';
    this.emailId = '';
    this.password = '';
    this.address = '';
    this.qualification = '';
  }
}
