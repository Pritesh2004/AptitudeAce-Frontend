import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatOptionModule } from '@angular/material/core'; // Import MatOptionModule
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.interceptor';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateQuizComponent } from './component/admin/create-quiz/create-quiz.component';
import { CategoriesComponent } from './component/admin/categories/categories.component';
import { QuizzesComponent } from './component/admin/quizzes/quizzes.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { QuestionsComponent } from './component/admin/questions/questions.component';
import { AddQuestionsComponent } from './component/admin/add-questions/add-questions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { AdminProfileComponent } from './component/admin/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    NavbarComponent,
    CreateQuizComponent,
    CategoriesComponent,
    QuizzesComponent,
    AddCategoriesComponent,
    UpdateQuizComponent,
    QuestionsComponent,
    AddQuestionsComponent,
    SideBarComponent,
    UserProfileComponent,
    AdminProfileComponent
  ],
  imports: [
    MatSelectModule,
    MatSidenavModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    CKEditorModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    MatOptionModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
