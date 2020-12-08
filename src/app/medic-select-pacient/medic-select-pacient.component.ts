import { Component, OnInit } from '@angular/core';

import { ListaPacientiService } from '../lista-pacienti.service';

@Component({
  selector: 'app-medic-select-pacient',
  templateUrl: './medic-select-pacient.component.html',
  styleUrls: ['./medic-select-pacient.component.scss']
})
export class MedicSelectPacientComponent implements OnInit {

  constructor(private listaPacientiService: ListaPacientiService) { }

  listaPacienti: any;

  ngOnInit(): void {

    this.listaPacienti = this.listaPacientiService.pacienti;
  }



}
