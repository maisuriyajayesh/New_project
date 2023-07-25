import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePendingActionsWidgetComponent } from './home-pending-actions-widget.component';

describe('HomePendingActionsWidgetComponent', () => {
  let component: HomePendingActionsWidgetComponent;
  let fixture: ComponentFixture<HomePendingActionsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePendingActionsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePendingActionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
