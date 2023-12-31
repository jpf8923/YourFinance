import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { GetAccountInfoService } from '../get-account-info.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})


export class DashboardComponent implements OnInit {

  
  purchases: Transaction[] = [];
  accountID?: String;
  tData: any;

  constructor(private service: GetAccountInfoService, private http: HttpClient, private forms: FormsModule) { }

  ngOnInit(): void {
    this.getService();

    this.getTransactions()
    console.log(this.purchases)
  }

  getService(): void {
    this.service.getData()
      .subscribe(accData => this.purchases = accData.transactionHistory.slice(1, 5));
  }

  getTransactions() {
    this.http.get("http://127.0.0.1:5000/transactions/A00313").subscribe((data: any) => {
      console.log(data)
      this.purchases = data.map((item: any) => ({
        transaction_id: item[0],
        account_id: item[1],
        transaction_date: item[2],
        transaction_media: item[3],
        transaction_type: item[4],
        transaction_amount: item[5],
      }));
      
      this.accountID = this.purchases[0]["account_id"];
    }, error => {
      console.error('Error: ' + error)
    })
    console.log(this.purchases);
  }
}