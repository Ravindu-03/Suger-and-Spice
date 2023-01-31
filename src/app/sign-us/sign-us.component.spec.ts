import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUsComponent } from './sign-us.component';

describe('SignUsComponent', () => {
  let component: SignUsComponent;
  let fixture: ComponentFixture<SignUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
