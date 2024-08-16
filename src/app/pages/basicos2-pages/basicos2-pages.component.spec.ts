import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basicos2PagesComponent } from './basicos2-pages.component';

describe('Basicos2PagesComponent', () => {
  let component: Basicos2PagesComponent;
  let fixture: ComponentFixture<Basicos2PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basicos2PagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Basicos2PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
