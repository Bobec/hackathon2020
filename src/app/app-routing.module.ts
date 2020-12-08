import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicAdaugaPacientComponent } from './medic-adauga-pacient/medic-adauga-pacient.component';
import { MedicComponent } from './medic/medic.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {
    path : 'medic/medicListaPacienti', loadChildren :'./medic-lista-pacienti/medic-lista-pacienti.module#MedicListaPacientiModule', canActivate: [AuthGuardService]
  },
  {
    path : 'medic/medicAdaugaPacient', component : MedicAdaugaPacientComponent, canActivate: [AuthGuardService]
  },
  {
    path : 'medic', component : MedicComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component : LoginComponent
  },
  {
    path: '**', component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
