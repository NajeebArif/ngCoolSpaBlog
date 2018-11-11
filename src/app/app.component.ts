import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthenticationServiceService } from './services/authentication-service.service';
import { Router } from '@angular/router';
import { UserCredentials } from './modelClasses/UserCredentials';
import { UrlRepositories } from './services/UrlRepositories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'The Coolest Blog Ever!!';
  greeting  = {};
  logoutHtml;

  constructor(private http: HttpClient,
    private authenticator: AuthenticationServiceService,
    private router: Router,
    private urlRepo: UrlRepositories){
  
  }

  
}
