import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientExperienceComponent } from './client-experience.component';

describe('ClientExperienceComponent', () => {
  let component: ClientExperienceComponent;
  let fixture: ComponentFixture<ClientExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
