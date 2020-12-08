import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTable } from 'primereact/datatable';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.scss']
})
export class MedicComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listaPacienti = [];

  ngOnInit(): void {
  }

  tesdDB() {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/testDB', {
      headers: headers
    })
    .subscribe((data:any) => {
      this.listaPacienti = data;
      console.log(data);
    });
  }

  
  
}

