import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoLaboralPageComponent } from './permiso-laboral-page.component';

describe('PermisoLaboralPageComponent', () => {
  let component: PermisoLaboralPageComponent;
  let fixture: ComponentFixture<PermisoLaboralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisoLaboralPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermisoLaboralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
