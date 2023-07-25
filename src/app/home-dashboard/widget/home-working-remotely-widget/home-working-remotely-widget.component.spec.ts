import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkingRemotelyWidgetComponent } from './home-working-remotely-widget.component';

describe('HomeWorkingRemotelyWidgetComponent', () => {
  let component: HomeWorkingRemotelyWidgetComponent;
  let fixture: ComponentFixture<HomeWorkingRemotelyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWorkingRemotelyWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkingRemotelyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
