import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedMeetingsComponent } from './created-meetings.component';

describe('CreatedMeetingsComponent', () => {
  let component: CreatedMeetingsComponent;
  let fixture: ComponentFixture<CreatedMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
