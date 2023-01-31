import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPannelComponent } from './nav-pannel.component';

describe('NavPannelComponent', () => {
  let component: NavPannelComponent;
  let fixture: ComponentFixture<NavPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
