import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCredentials } from '../modelClasses/UserCredentials';
import { UrlRepositories } from './UrlRepositories';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  authenticated: Boolean = false;

  constructor(private http: HttpClient, private urlRepo: UrlRepositories) { }

  authenticate(credentials: UserCredentials, callback){

    const authHeader = new HttpHeaders(credentials? {
      authorization : 'Basic '+btoa(credentials.username +':'+credentials.password)
    }: {});

    const loginUrl = this.urlRepo.getLoginUrl();
    this.http.get(loginUrl,{headers:authHeader}).subscribe(response=>{
      if(response['name']){
        this.authenticated = true;
      }else{
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
}
