import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaEntertainmentComponent } from './media-entertainment.component';

describe('MediaEntertainmentComponent', () => {
  let component: MediaEntertainmentComponent;
  let fixture: ComponentFixture<MediaEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
