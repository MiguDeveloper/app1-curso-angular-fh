import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAComponent } from './panel-a.component';

describe('PanelAComponent', () => {
  let component: PanelAComponent;
  let fixture: ComponentFixture<PanelAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
