import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicAdaugaPacientComponent } from './medic-adauga-pacient.component';

describe('MedicAdaugaPacientComponent', () => {
  let component: MedicAdaugaPacientComponent;
  let fixture: ComponentFixture<MedicAdaugaPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicAdaugaPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicAdaugaPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
