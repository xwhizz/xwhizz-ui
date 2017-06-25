import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignHomeComponent } from './web-design-home.component';

describe('WebDesignHomeComponent', () => {
  let component: WebDesignHomeComponent;
  let fixture: ComponentFixture<WebDesignHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
