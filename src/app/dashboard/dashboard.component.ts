import { Component, OnInit } from '@angular/core';
import { purchaseData } from '../purchaseData';
import { GetAccountInfoService } from '../get-account-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  purchases: purchaseData[] = [];

  constructor(private service: GetAccountInfoService) { }

  ngOnInit(): void {
    this.getService();
  }

  getService(): void {
    this.service.getData()
      .subscribe(accData => this.purchases = accData.purchaseList.slice(1, 5));
  }
}