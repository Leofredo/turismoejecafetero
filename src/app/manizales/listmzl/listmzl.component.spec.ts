import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmzlComponent } from './listmzl.component';

describe('ListmzlComponent', () => {
  let component: ListmzlComponent;
  let fixture: ComponentFixture<ListmzlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmzlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmzlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
