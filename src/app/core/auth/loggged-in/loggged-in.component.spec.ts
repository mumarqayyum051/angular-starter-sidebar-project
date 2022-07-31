/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogggedInComponent } from './loggged-in.component';

describe('LogggedInComponent', () => {
  let component: LogggedInComponent;
  let fixture: ComponentFixture<LogggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
