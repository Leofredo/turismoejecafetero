import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarmComponent } from './addarm.component';

describe('AddarmComponent', () => {
  let component: AddarmComponent;
  let fixture: ComponentFixture<AddarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
