import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegisterComponent} from './feature/register/register.component';
import { AppRoutingModule } from './app-routing.module'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './feature/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import { AuthinterceptorInterceptor } from './interceptor/authinterceptor.interceptor';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SidemenuComponent } from './components/pages/admin/sidemenu/sidemenu.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { WelcomeadminComponent } from './components/pages/admin/welcomeadmin/welcomeadmin.component';
import { ViewCategoriesComponent } from './components/pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './components/pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './components/pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './components/pages/admin/add-quiz/add-quiz.component';
import { RxjslComponent } from './components/rxjsl/rxjsl.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidemenuComponent,
    WelcomeadminComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    RxjslComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorInterceptor, 
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
