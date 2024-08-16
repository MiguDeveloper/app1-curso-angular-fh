import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDbzPageComponent } from './main-dbz-page.component';

describe('MainDbzPageComponent', () => {
  let component: MainDbzPageComponent;
  let fixture: ComponentFixture<MainDbzPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDbzPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDbzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
