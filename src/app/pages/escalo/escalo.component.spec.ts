import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaloComponent } from './escalo.component';

describe('EscaloComponent', () => {
  let component: EscaloComponent;
  let fixture: ComponentFixture<EscaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscaloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
