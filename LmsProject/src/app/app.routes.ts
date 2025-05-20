import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/landing-page/landing-page.component';
import { StudentRegistrationComponent } from './Registration/student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './Registration/teacher-registration/teacher-registration.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { StudentComponent } from './dashboard/student/student.component';
import { LoginComponent } from './landingPage/login/login.component';
import { ApproveUserComponent } from './Approve/apporve-user/apporve-user.component';
import { StudentCrudComponent } from './Crud/student-crud/student-crud.component';
import { TeacherCrudComponent } from './Crud/teacher-crud/teacher-crud.component';
import path from 'path';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:role', loadComponent: () => import('./landingPage/login/login.component').then(m => m.LoginComponent) },
  { path: 'register/student', component: StudentRegistrationComponent },
  { path: 'register/teacher', component: TeacherRegistrationComponent },
  {
  path: 'dashboard/admin',
  component: AdminComponent
},
{
  path: 'dashboard/teacher',
  component: TeacherComponent
},
{
  path: 'dashboard/student',
  component: StudentComponent
},

 {path:'apporve',component:ApproveUserComponent},

    {path:'student-crud', component:StudentCrudComponent},

  {path:'teacher-crud', component:TeacherCrudComponent},


  { path: '**', redirectTo: '' }



];
