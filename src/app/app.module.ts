import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicSelectPacientComponent } from './medic-select-pacient/medic-select-pacient.component';
import { MaterialModule } from 'src/material.component';
import { MedicComponent } from './medic/medic.component';
import { MedicAdaugaPacientComponent } from './medic-adauga-pacient/medic-adauga-pacient.component';
import { LoginComponent } from './login/login.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { MedicListaPacientiModule } from './medic-lista-pacienti/medic-lista-pacienti.module';
import { AuthGuardService } from './auth-guard.service';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MedicSelectPacientComponent,
    MedicComponent,
    MedicAdaugaPacientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MedicListaPacientiModule,
    MatAutocompleteModule
  ],
  providers: [AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
