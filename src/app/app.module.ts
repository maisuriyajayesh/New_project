import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomePendingActionsWidgetComponent } from './home-dashboard/widget/home-pending-actions-widget/home-pending-actions-widget.component';
import { HomeHolidaysWidgetComponent } from './home-dashboard/widget/home-holidays-widget/home-holidays-widget.component';
import { HomeOnLeaveWidgetComponent } from './home-dashboard/widget/home-on-leave-widget/home-on-leave-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeDashboardComponent,
    HomePendingActionsWidgetComponent,
    HomeHolidaysWidgetComponent,
    HomeOnLeaveWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
