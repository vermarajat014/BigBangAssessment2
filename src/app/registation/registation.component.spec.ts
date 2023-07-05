import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationComponent } from './registation.component';

describe('RegistationComponent', () => {
  let component: RegistationComponent;
  let fixture: ComponentFixture<RegistationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistationComponent]
    });
    fixture = TestBed.createComponent(RegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
