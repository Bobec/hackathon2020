import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ListaPacientiService } from '../lista-pacienti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router : Router, private listaPacientiService: ListaPacientiService) { }

  SERVER_ADDRESS = this.listaPacientiService.SERVER_ADDRESS;

  loginData = {};
  username = '';
  password = '';
  specializare = '';
  varsta = 0;
  registration = false;

  ngOnInit(): void {
    this.username = "";
    this.password = "";
    this.specializare = "";
    this.varsta = 0;
    this.registration = false;
  }

  login() {
    console.log("Pending login");
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.loginData = {
      'cont' : 'Medic',
      'parameters': {
      'name' : this.username,
      'password' : this.password
      }
    };

    this.listaPacientiService.rootUser = this.username;
    this.listaPacientiService.rootPassword = this.password;

    this.http.post(this.SERVER_ADDRESS + '/login', JSON.stringify(this.loginData), {
      headers: headers
    })
    .subscribe((data:any) => {
      if(!data.error) {
        console.log(data);
        localStorage.setItem('token', "data.token");
        this.router.navigate(['medic']);

      }
      else {
        this.router.navigate(['login']);
      }
    });
  }

  register() {
    console.log("Pending registration");
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    if(this.selected.name == 'Pacient') {
      this.loginData = {
        'cont' : 'Pacient',
        'nume' : this.username,
        'uu' : this.password,
        'varsta' : this.varsta
      };
    }
    else {
      console.log('create medic');
      this.loginData = {
        'cont' : 'Medic',
        'parameters' : {
          'nume' : this.username,
          'uu' : this.password,
          'specializare' : this.specializare
        }
      };
    }
    
    console.log( JSON.stringify(this.loginData));

    this.http.post(this.SERVER_ADDRESS + '/register', JSON.stringify(this.loginData), {
      headers: headers
    })
    .subscribe((data:any) => {
      if(!data.error) {
        console.log(data);
        this.router.navigate(['medic']);
      }
      else {
        this.router.navigate(['login']);
      }
    });
  }
  

  compareObjects(o1: any, o2: any) {
    if(o1.name == o2.name && o1.id == o2.id )
    return true;
    else return false
  }
  selected : Role = {
    
    name: "Medic",
    id: '1'
  };
  listOfObjs = [{ name: 'Medic', id: '1'}, { name: 'Pacient', id: '2'}]

}
interface Role {
  name: string;
  id: string;
}

interface Data {
  "status" : boolean,
  "token" : "string"
}
