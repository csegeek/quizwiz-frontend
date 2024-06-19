import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './feature/register/register.component'
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './feature/login/login.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/guards/admin.guard';
import { normalGuard } from './services/guards/normal.guard';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { WelcomeadminComponent } from './components/pages/admin/welcomeadmin/welcomeadmin.component';
import { ViewCategoriesComponent } from './components/pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './components/pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './components/pages/admin/add-quiz/add-quiz.component';
import { RxjslComponent } from './components/rxjsl/rxjsl.component';

// Create a routes Array
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch:"full"
  },
  {
    path: 'signup',
    component: RegisterComponent,
    pathMatch:"full"
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch:"full"
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children:[
      { 
        path: '',
        component:WelcomeadminComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent
      }
    ],
    canActivate:[adminGuard]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch:"full",
    canActivate:[normalGuard]
  },
  {
    path: 'rxjs',
    component: RxjslComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
