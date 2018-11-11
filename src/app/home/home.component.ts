import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: String;
  greeting= {};

  constructor(private authenticator: AuthenticationServiceService, private http:HttpClient) { }

  ngOnInit() {
  }

  authenticated(): Boolean{
    return this.authenticator.authenticated;
  }

}
