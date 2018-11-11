import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthenticationServiceService } from './authentication-service.service';
import { Router } from '@angular/router';
import { UserCredentials } from './login/UserCredentials';

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
    private router: Router){
    // http.get('http://localhost:8080/api').subscribe(data=> {console.log(data);this.greeting = data});
    // console.log('Calling the authenticator service.')
    // this.authenticator.authenticate(
    //   new UserCredentials('user','password'),
    //   ()=> console.log("Service returned.")
    // );
  }

  logout(){
    console.log('calling logout.')
    const url = 'http://localhost:8080/j_spring_security_logout';
    console.log('URL: '+url)
    this.http.get(url).subscribe(data=>{
      console.log(data);
      this.authenticator.authenticated=false;
      //this.router.navigateByUrl('/login');
    });
  }
}
