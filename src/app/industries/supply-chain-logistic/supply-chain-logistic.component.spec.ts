import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainLogisticComponent } from './supply-chain-logistic.component';

describe('SupplyChainLogisticComponent', () => {
  let component: SupplyChainLogisticComponent;
  let fixture: ComponentFixture<SupplyChainLogisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyChainLogisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyChainLogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
