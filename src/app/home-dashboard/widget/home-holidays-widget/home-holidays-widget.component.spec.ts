import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHolidaysWidgetComponent } from './home-holidays-widget.component';

describe('HomeHolidaysWidgetComponent', () => {
  let component: HomeHolidaysWidgetComponent;
  let fixture: ComponentFixture<HomeHolidaysWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHolidaysWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHolidaysWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
