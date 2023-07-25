import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAttendanceClockinWidgetComponent } from './home-attendance-clockin-widget.component';

describe('HomeAttendanceClockinWidgetComponent', () => {
  let component: HomeAttendanceClockinWidgetComponent;
  let fixture: ComponentFixture<HomeAttendanceClockinWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAttendanceClockinWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAttendanceClockinWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
