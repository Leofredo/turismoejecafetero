import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListperComponent } from './listper.component';

describe('ListperComponent', () => {
  let component: ListperComponent;
  let fixture: ComponentFixture<ListperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
