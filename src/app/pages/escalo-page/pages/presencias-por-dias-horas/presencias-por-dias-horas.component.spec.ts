import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciasPorDiasHorasComponent } from './presencias-por-dias-horas.component';

describe('PresenciasPorDiasHorasComponent', () => {
  let component: PresenciasPorDiasHorasComponent;
  let fixture: ComponentFixture<PresenciasPorDiasHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenciasPorDiasHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresenciasPorDiasHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
