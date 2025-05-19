// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  selectedRole: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (!this.selectedRole || !this.email || !this.password) {
      alert('Please fill all fields!');
      return;
    }

   if (this.selectedRole === 'student') {
  this.router.navigate(['/dashboard/student']);
} else if (this.selectedRole === 'teacher') {
  this.router.navigate(['/dashboard/teacher']);
} else if (this.selectedRole === 'admin') {
  this.router.navigate(['/dashboard/admin']);
}

  }
}
