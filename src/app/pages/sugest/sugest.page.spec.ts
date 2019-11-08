import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestPage } from './sugest.page';

describe('SugestPage', () => {
  let component: SugestPage;
  let fixture: ComponentFixture<SugestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
