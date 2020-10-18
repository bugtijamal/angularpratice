import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Issu01Component } from './issu01.component';

describe('Issu01Component', () => {
  let component: Issu01Component;
  let fixture: ComponentFixture<Issu01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Issu01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issu01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
