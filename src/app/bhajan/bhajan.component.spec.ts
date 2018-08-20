import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhajanComponent } from './bhajan.component';

describe('BhajanComponent', () => {
  let component: BhajanComponent;
  let fixture: ComponentFixture<BhajanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhajanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhajanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
