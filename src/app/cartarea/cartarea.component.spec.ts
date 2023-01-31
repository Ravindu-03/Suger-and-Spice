import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartareaComponent } from './cartarea.component';

describe('CartareaComponent', () => {
  let component: CartareaComponent;
  let fixture: ComponentFixture<CartareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
