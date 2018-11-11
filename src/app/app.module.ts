import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@Angular/forms';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { UrlRepositories } from './services/UrlRepositories';
import { NavbarComponent } from './navbar/navbar.component';

const route: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationServiceService,UrlRepositories],
  bootstrap: [AppComponent]
})
export class AppModule { }
