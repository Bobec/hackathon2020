import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaPacientiService } from '../lista-pacienti.service';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import { connect } from 'http2';

@Component({
  selector: 'app-medic-adauga-pacient',
  templateUrl: './medic-adauga-pacient.component.html',
  styleUrls: ['./medic-adauga-pacient.component.scss']
})
export class MedicAdaugaPacientComponent implements OnInit {

  constructor(private http: HttpClient, private listaPacientiService: ListaPacientiService, private _formBuilder: FormBuilder, private matAutocomplete : MatAutocompleteModule) {}

  SERVER_ADDRESS = this.listaPacientiService.SERVER_ADDRESS;

  filteredPatients = [];
  options : string[] = [];
  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  

  private _filter(value: string): string[] {
    if(value != undefined) {
      const filterValue = value.toLowerCase();
  
      return this.options.filter((option)=> option["nume"].toLowerCase().includes(filterValue));

    }
    else {
      return [];
    }
  }

  ngOnInit(): void {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');


    this.http.get<any>(this.SERVER_ADDRESS + '/pacienti')
    .subscribe((data:any) => {
      if(!data.error) {
        console.log(data);
        
        /*for(var i = 0; i < data.length; i++) {
          this.options.push(data[i].nume);
        }*/

        this.options = data;

      }
      else {
        console.log("Could not find");
      }
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  selectedPatient:{} | undefined;

  selectedOption = (option: any) => {
    this.selectedPatient = option;
    console.log(this.selectedPatient);
  }

  addPacient = () => {
    this.http.post(this.SERVER_ADDRESS + '\medicPacient', )
  }

}

interface Pacient {
  nume : string,
  varsta : number
}