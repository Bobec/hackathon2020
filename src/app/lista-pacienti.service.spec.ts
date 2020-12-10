import { TestBed } from '@angular/core/testing';

import { ListaPacientiService } from './lista-pacienti.service';

describe('ListaPacientiService', () => {
  let service: ListaPacientiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPacientiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
