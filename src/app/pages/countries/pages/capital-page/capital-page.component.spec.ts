import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalPageComponent } from './capital-page.component';

describe('CapitalPageComponent', () => {
  let component: CapitalPageComponent;
  let fixture: ComponentFixture<CapitalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
