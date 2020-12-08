import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router : Router) { }

  loginData = {};
  username = '';
  password = '';

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  login() {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.loginData = {
      'username' : this.username,
      'password' : this.password
    };

    this.http.post('http://127.0.0.1:3000/login', JSON.stringify(this.loginData), {
      headers: headers
    })
    .subscribe((data:any) => {
      if(data.status == true) {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['medic']);
      }
      else {
        this.router.navigate(['login']);
      }
    });
  }

}

interface Data {
  "status" : boolean,
  "token" : "string"
}
