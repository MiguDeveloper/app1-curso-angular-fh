import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSignalsComponent } from './main-signals.component';

describe('MainSignalsComponent', () => {
  let component: MainSignalsComponent;
  let fixture: ComponentFixture<MainSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
