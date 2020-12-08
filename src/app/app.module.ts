import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicSelectPacientComponent } from './medic-select-pacient/medic-select-pacient.component';
import { MaterialModule } from 'src/material.component';
import { MedicComponent } from './medic/medic.component';
import { MedicAdaugaPacientComponent } from './medic-adauga-pacient/medic-adauga-pacient.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { MedicListaPacientiModule } from './medic-lista-pacienti/medic-lista-pacienti.module';
import { AuthGuardService } from './auth-guard.service';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MedicListaPacientiModule
  ],
  providers: [AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
