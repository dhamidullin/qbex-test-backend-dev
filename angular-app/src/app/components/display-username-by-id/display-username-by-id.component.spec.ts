import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUsernameByIdComponent } from './display-username-by-id.component';

describe('DisplayUsernameByIdComponent', () => {
  let component: DisplayUsernameByIdComponent;
  let fixture: ComponentFixture<DisplayUsernameByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUsernameByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUsernameByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
