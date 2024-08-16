import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicosPageComponent } from './basicos-page.component';

describe('BasicosPageComponent', () => {
  let component: BasicosPageComponent;
  let fixture: ComponentFixture<BasicosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
