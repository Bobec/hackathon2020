import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { DataTable } from 'primereact/datatable';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.scss']
})
export class MedicComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  
}

