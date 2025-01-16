import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransition2Component } from './view-transition2.component';

describe('ViewTransition2Component', () => {
  let component: ViewTransition2Component;
  let fixture: ComponentFixture<ViewTransition2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransition2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTransition2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
