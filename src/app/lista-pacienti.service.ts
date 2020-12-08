import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaPacientiService {

  constructor() { }

  pacienti = [
    {
      'nume' : 'Marius',
      'varsta' : 30,
      'tratament' : ['T1', 'T2'] 
    },
    {
      'nume' : 'Victor',
      'varsta' : 40,
      'tratament' : ['T2', 'T1'] 
    }
  ];
    
}



interface Pacient {
  'nume' : string;
  'varsta' : number;
  'tratament' : string[];
}