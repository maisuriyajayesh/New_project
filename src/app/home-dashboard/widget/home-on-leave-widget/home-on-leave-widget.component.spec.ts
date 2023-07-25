import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnLeaveWidgetComponent } from './home-on-leave-widget.component';

describe('HomeOnLeaveWidgetComponent', () => {
  let component: HomeOnLeaveWidgetComponent;
  let fixture: ComponentFixture<HomeOnLeaveWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOnLeaveWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOnLeaveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
