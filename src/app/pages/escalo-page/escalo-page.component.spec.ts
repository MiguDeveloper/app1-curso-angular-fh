import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaloPageComponent } from './escalo-page.component';

describe('EscaloPageComponent', () => {
  let component: EscaloPageComponent;
  let fixture: ComponentFixture<EscaloPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscaloPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscaloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
