import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicSelectPacientComponent } from './medic-select-pacient.component';

describe('MedicSelectPacientComponent', () => {
  let component: MedicSelectPacientComponent;
  let fixture: ComponentFixture<MedicSelectPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicSelectPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicSelectPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
