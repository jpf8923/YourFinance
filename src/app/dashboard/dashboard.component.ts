import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { GetAccountInfoService } from '../get-account-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  purchases: Transaction[] = [];

  constructor(private service: GetAccountInfoService) { }

  ngOnInit(): void {
    this.getService();
  }

  getService(): void {
    this.service.getData()
      .subscribe(accData => this.purchases = accData.transactionHistory.slice(1, 5));
  }
}