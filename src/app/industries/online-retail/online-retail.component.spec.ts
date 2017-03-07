import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRetailComponent } from './online-retail.component';

describe('OnlineRetailComponent', () => {
  let component: OnlineRetailComponent;
  let fixture: ComponentFixture<OnlineRetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
