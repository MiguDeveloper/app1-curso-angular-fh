import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSearchBoxComponent } from './gift-search-box.component';

describe('GiftSearchBoxComponent', () => {
  let component: GiftSearchBoxComponent;
  let fixture: ComponentFixture<GiftSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftSearchBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
