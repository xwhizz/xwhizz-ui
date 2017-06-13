import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPhpDevelopmentComponent } from './custom-php-development.component';

describe('CustomPhpDevelopmentComponent', () => {
  let component: CustomPhpDevelopmentComponent;
  let fixture: ComponentFixture<CustomPhpDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPhpDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPhpDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
