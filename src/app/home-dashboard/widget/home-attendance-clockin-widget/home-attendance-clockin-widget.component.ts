import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-attendance-clockin-widget',
  templateUrl: './home-attendance-clockin-widget.component.html',
  styleUrls: ['./home-attendance-clockin-widget.component.scss']
})
export class HomeAttendanceClockinWidgetComponent implements OnInit {
  date: any;
  todayString : string = new Date().toDateString();
  constructor() {

    setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {


  }
}
