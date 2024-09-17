import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusenciaPorHorasComponent } from './ausencia-por-horas.component';

describe('AusenciaPorHorasComponent', () => {
  let component: AusenciaPorHorasComponent;
  let fixture: ComponentFixture<AusenciaPorHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AusenciaPorHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AusenciaPorHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
