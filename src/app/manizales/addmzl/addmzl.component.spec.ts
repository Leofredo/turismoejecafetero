import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmzlComponent } from './addmzl.component';

describe('AddmzlComponent', () => {
  let component: AddmzlComponent;
  let fixture: ComponentFixture<AddmzlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmzlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmzlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
