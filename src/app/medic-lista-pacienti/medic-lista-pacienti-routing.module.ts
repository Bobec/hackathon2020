import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicSelectPacientComponent } from '../medic-select-pacient/medic-select-pacient.component';

const routes: Routes = [
  {
    path : 'medic/medicSelectPacient', component : MedicSelectPacientComponent
  },
  {
    path : '**', component : MedicSelectPacientComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicListaPacientiRoutingModule { }
