import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPageComponent } from './contador-page.component';

describe('ContadorPageComponent', () => {
  let component: ContadorPageComponent;
  let fixture: ComponentFixture<ContadorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContadorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
