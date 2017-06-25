import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsDesignComponent } from './graphics-design.component';

describe('GraphicsDesignComponent', () => {
  let component: GraphicsDesignComponent;
  let fixture: ComponentFixture<GraphicsDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
