import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShankarComponent } from './shankar.component';

describe('ShankarComponent', () => {
  let component: ShankarComponent;
  let fixture: ComponentFixture<ShankarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShankarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShankarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
