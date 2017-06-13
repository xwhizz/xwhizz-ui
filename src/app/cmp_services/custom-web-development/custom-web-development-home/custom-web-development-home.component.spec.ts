import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebDevelopmentHomeComponent } from './custom-web-development-home.component';

describe('CustomWebDevelopmentHomeComponent', () => {
  let component: CustomWebDevelopmentHomeComponent;
  let fixture: ComponentFixture<CustomWebDevelopmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWebDevelopmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWebDevelopmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
