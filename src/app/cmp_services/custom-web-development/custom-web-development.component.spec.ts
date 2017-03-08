import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebDevelopmentComponent } from './custom-web-development.component';

describe('CustomWebDevelopmentComponent', () => {
  let component: CustomWebDevelopmentComponent;
  let fixture: ComponentFixture<CustomWebDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWebDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
