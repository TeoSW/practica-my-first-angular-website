import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakeComponent } from './sake.component';

describe('SakeComponent', () => {
  let component: SakeComponent;
  let fixture: ComponentFixture<SakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
