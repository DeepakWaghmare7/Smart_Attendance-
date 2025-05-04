import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AllUsersComponent } from './components/admin/all-users/all-users.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/admin/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/common/all-subject/all-subject.component';
import { EditSubjectComponent } from './components/admin/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/admin/view-all-attendance/view-all-attendance.component';
import { ViewAttendanceComponent } from './components/faculty/view-attendance/view-attendance.component';
import { TakeAttendanceComponent } from './components/faculty/take-attendance/take-attendance.component';
import { EditStudentComponent } from './components/faculty/edit-student/edit-student.component';
import { AllStudentComponent } from './components/faculty/all-student/all-student.component';
import { AddStudentComponent } from './components/faculty/add-student/add-student.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'faculty-dashboard',
    component: FacultyDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-user',
    component: AllUsersComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'edit-user/:username',
    component: EditUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-subject',
    component: AllSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-subject/:subjectid',
    component: EditSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'view-all-attendance',
    component: ViewAllAttendanceComponent,
    canActivate:[AuthGuard]
  },

  /* faculty routes */
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-students',
    component: AllStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'take-attendance',
    component: TakeAttendanceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view-attendance',
    component:ViewAttendanceComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
