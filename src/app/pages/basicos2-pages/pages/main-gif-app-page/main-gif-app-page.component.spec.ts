import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGifAppPageComponent } from './main-gif-app-page.component';

describe('MainGifAppPageComponent', () => {
  let component: MainGifAppPageComponent;
  let fixture: ComponentFixture<MainGifAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGifAppPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGifAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
