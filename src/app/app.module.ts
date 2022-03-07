import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './approuting.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SpecificUserProfileComponent } from './specific-user-profile/specific-user-profile.component';
import { SpecificUsersArticlesComponent } from './specific-users-articles/specific-users-articles.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArticleComponent } from './article/article.component';
import { AadminComponent } from './aadmin/aadmin.component';
import { AarticleComponent } from './aarticle/aarticle.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FirstComponent,
    NavigationComponent,
    SpecificUserProfileComponent,
    SpecificUsersArticlesComponent,
    ViewUsersComponent,
    UserDetailsComponent,
    FirstComponent,
    AddArticleComponent,
    UserDetailsComponent,UserProfileComponent,
    ArticleComponent,AadminComponent,AarticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  Ng2OrderModule,
  NgxPaginationModule,
  Ng2SearchPipeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
