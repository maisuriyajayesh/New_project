import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeaveBalancesWidgetComponent } from './home-leave-balances-widget.component';

describe('HomeLeaveBalancesWidgetComponent', () => {
  let component: HomeLeaveBalancesWidgetComponent;
  let fixture: ComponentFixture<HomeLeaveBalancesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeaveBalancesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLeaveBalancesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
