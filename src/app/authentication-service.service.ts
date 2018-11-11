import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCredentials } from './login/UserCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  authenticated: Boolean = false;

  constructor(private http: HttpClient) { }

  authenticate(credentials: UserCredentials, callback){

    const authHeader = new HttpHeaders(credentials? {
      authorization : 'Basic '+btoa(credentials.username +':'+credentials.password)
    }: {});

    this.http.get('http://localhost:8080/user',{headers:authHeader}).subscribe(response=>{
      if(response['name']){
        this.authenticated = true;
      }else{
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
}
