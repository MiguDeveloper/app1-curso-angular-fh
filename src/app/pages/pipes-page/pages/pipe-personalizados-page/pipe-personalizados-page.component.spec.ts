import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePersonalizadosPageComponent } from './pipe-personalizados-page.component';

describe('PipePersonalizadosPageComponent', () => {
  let component: PipePersonalizadosPageComponent;
  let fixture: ComponentFixture<PipePersonalizadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipePersonalizadosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipePersonalizadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
