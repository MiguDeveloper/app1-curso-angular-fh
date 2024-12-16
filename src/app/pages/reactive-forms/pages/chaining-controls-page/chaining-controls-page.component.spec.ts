import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingControlsPageComponent } from './chaining-controls-page.component';

describe('ChainingControlsPageComponent', () => {
  let component: ChainingControlsPageComponent;
  let fixture: ComponentFixture<ChainingControlsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainingControlsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainingControlsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
