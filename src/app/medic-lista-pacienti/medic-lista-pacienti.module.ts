import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicListaPacientiRoutingModule } from './medic-lista-pacienti-routing.module';
import { ListaPacientiService } from '../lista-pacienti.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedicListaPacientiRoutingModule
  ]
})
export class MedicListaPacientiModule { 

  constructor(private listaPacientiService: ListaPacientiService){}

  listaPacienti = this.listaPacientiService.pacienti;
}
