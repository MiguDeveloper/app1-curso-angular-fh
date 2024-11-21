import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriePageComponent } from './countrie-page.component';

describe('CountriePageComponent', () => {
  let component: CountriePageComponent;
  let fixture: ComponentFixture<CountriePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
