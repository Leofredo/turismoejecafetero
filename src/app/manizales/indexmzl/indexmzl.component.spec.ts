import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexmzlComponent } from './indexmzl.component';

describe('IndexmzlComponent', () => {
  let component: IndexmzlComponent;
  let fixture: ComponentFixture<IndexmzlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexmzlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexmzlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
