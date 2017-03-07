import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcLsComponent } from './hc-ls.component';

describe('HcLsComponent', () => {
  let component: HcLsComponent;
  let fixture: ComponentFixture<HcLsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcLsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
