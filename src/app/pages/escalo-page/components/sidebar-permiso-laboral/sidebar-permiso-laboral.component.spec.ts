import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPermisoLaboralComponent } from './sidebar-permiso-laboral.component';

describe('SidebarPermisoLaboralComponent', () => {
  let component: SidebarPermisoLaboralComponent;
  let fixture: ComponentFixture<SidebarPermisoLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPermisoLaboralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarPermisoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
