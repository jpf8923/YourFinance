//Display list of purchases
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GetAccountInfoService } from '../get-account-info.service';
import { Transaction } from '../Transaction';
import { ReadVarExpr } from '@angular/compiler';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent {
  pList?: Transaction[];

  transactionData: any;




  ngOnInit(){
    this.getPurchaseData();
  }


  constructor(private getter:GetAccountInfoService,   private location: Location, private http: HttpClient){}

  getPurchaseData(){

    this.getter.getData().subscribe( (accData) => {
      this.pList = accData.transactionHistory
      this.pList.push(
        {"transaction_id": 1, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, },
        {"transaction_id": 2, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, },
        {"transaction_id": 3, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, },
        {"transaction_id": 4, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, 
      }
        )
  
    } );
  }



  getTransactions() {
    const url = 'http://127.0.0.1:5000/transactions/A00351';

    this.http.get(url).subscribe(
      (data: any) => {
        console.log(url)
        this.transactionData = data;
        console.log(data); // Print the data to the console
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  //Go back
  goBack(): void {
    this.location.back();
  }
}
