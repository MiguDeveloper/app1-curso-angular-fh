import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusenciaPorDiasComponent } from './ausencia-por-dias.component';

describe('AusenciaPorDiasComponent', () => {
  let component: AusenciaPorDiasComponent;
  let fixture: ComponentFixture<AusenciaPorDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AusenciaPorDiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AusenciaPorDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
