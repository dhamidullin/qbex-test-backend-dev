import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductByIdComponent } from './display-product-by-id.component';

describe('DisplayProductByIdComponent', () => {
  let component: DisplayProductByIdComponent;
  let fixture: ComponentFixture<DisplayProductByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
