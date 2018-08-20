import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInvolvedComponent } from './people-involved.component';

describe('PeopleInvolvedComponent', () => {
  let component: PeopleInvolvedComponent;
  let fixture: ComponentFixture<PeopleInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleInvolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
