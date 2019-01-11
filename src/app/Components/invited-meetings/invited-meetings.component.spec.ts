import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedMeetingsComponent } from './invited-meetings.component';

describe('InvitedMeetingsComponent', () => {
  let component: InvitedMeetingsComponent;
  let fixture: ComponentFixture<InvitedMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
