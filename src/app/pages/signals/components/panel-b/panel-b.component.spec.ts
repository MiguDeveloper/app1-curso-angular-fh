import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBComponent } from './panel-b.component';

describe('PanelBComponent', () => {
  let component: PanelBComponent;
  let fixture: ComponentFixture<PanelBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
