import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { Router } from '@angular/router';
import { UserCredentials } from '../modelClasses/UserCredentials';
import { UrlRepositories } from '../services/UrlRepositories';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient,
    private authenticator: AuthenticationServiceService,
    private router: Router,
    private urlRepo: UrlRepositories){
  
  }

  ngOnInit() {
  }

  logout(){
    const url:string = this.urlRepo.getLogoutUrl();
    this.http.get(url).subscribe(data=>{
      console.log(data);
      this.authenticator.authenticated=false;
      this.router.navigateByUrl('/login');
    });
  }

  isAuthenticated():Boolean{
    return this.authenticator.authenticated;
  }

}
