//Display list of purchases
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { Transaction } from '../Transaction';
@Component({
  selector: 'app-display-purchases',
  templateUrl: './display-purchases.component.html',
  styleUrls: ['./display-purchases.component.css']
})
export class DisplayPurchasesComponent {
  pList?: Transaction[];

  ngOnInit(){
    this.getPurchaseData();



  }

  constructor(private getter:GetAccountInfoService){}

  getPurchaseData(){
    this.getter.getData().subscribe( (accData) => {
      this.pList = accData.transactionHistory
      this.pList.push(
        {"transaction_id": 123, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, },
        {"transaction_id": 123, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, },
        {"transaction_id": 123, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, },
        {"transaction_id": 123, 
        "account_id": "A", 
        "transaction_date": "Date.now()", 
        "transaction_type": "Credit_card", 
        "transaction_amount": 123, }
        )
  
    } );
  }

}
