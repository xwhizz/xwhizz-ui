import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingQaComponent } from './testing-qa.component';

describe('TestingQaComponent', () => {
  let component: TestingQaComponent;
  let fixture: ComponentFixture<TestingQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
