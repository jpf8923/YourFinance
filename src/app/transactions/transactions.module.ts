import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Transaction';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ] 
})
export class TransactionsModule implements OnInit { 

  purchases: Transaction[];

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    // this.getService();

    this.getTransactions()
    console.log(this.purchases)
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
      
      
    }, error => {
      console.error('Error: ' + error)
    })
    console.log(this.purchases);
  }

}
