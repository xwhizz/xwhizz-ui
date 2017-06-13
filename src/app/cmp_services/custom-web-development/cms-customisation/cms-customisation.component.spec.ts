import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCustomisationComponent } from './cms-customisation.component';

describe('CmsCustomisationComponent', () => {
  let component: CmsCustomisationComponent;
  let fixture: ComponentFixture<CmsCustomisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsCustomisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsCustomisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
