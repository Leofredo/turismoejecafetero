import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddperComponent } from './addper.component';

describe('AddperComponent', () => {
  let component: AddperComponent;
  let fixture: ComponentFixture<AddperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
