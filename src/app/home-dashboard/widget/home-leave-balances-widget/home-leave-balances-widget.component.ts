import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home-leave-balances-widget',
  templateUrl: './home-leave-balances-widget.component.html',
  styleUrls: ['./home-leave-balances-widget.component.scss']
})
export class HomeLeaveBalancesWidgetComponent implements OnInit {

  progressValue = 100;
  totalLeaves = 24;
  leavesSubtracted = 2;

  ngOnInit() {
    this.updateProgressBar();
  }

  updateProgressBar() {
    // Calculate the remaining leaves
    const remainingLeaves = this.totalLeaves - this.leavesSubtracted;

    // Calculate the progress value in percentage
    this.progressValue = (remainingLeaves / this.totalLeaves) * 100;
  }
}
