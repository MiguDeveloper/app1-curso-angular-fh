import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAngularPageComponent } from './pipe-angular-page.component';

describe('PipeAngularPageComponent', () => {
  let component: PipeAngularPageComponent;
  let fixture: ComponentFixture<PipeAngularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeAngularPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeAngularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
