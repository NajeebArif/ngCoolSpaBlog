import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class UrlRepositories{
    private loginUrl: string = 'http://localhost:8080/user';
    private logoutUrl: string = 'http://localhost:8080/j_spring_security_logout';
    private apiUrl: string = "http://localhost:8080/api";

    public getLoginUrl():string{
        return this.loginUrl;
    }

    public getLogoutUrl():string{
        return this.logoutUrl;
    }

    public getApiUrl():string{
        return this.apiUrl;
    }

}