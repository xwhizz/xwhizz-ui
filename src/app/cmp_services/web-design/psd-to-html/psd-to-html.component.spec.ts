import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsdToHtmlComponent } from './psd-to-html.component';

describe('PsdToHtmlComponent', () => {
  let component: PsdToHtmlComponent;
  let fixture: ComponentFixture<PsdToHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsdToHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsdToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
