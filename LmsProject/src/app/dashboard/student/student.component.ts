import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private router: Router) {}
 logout() {
    this.router.navigate(['/login']);
  }
}
