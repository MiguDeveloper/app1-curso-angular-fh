import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignalsPageComponent } from './users-signals-page.component';

describe('UsersSignalsPageComponent', () => {
  let component: UsersSignalsPageComponent;
  let fixture: ComponentFixture<UsersSignalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersSignalsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersSignalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
