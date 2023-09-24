//Display the account status data
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { accountData } from '../accountData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-acc-status',
  templateUrl: './display-acc-status.component.html',
  styleUrls: ['./display-acc-status.component.css']
})

export class DisplayAccStatusComponent {
  accSelected ?: accountData;
  ngOnInit(){
    this.getAccountData();
  }

  transactionData: any;

  constructor(private getter:GetAccountInfoService, private http:HttpClient){
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

  
  getAccountData(){
    this.getter.getData().subscribe( (accData) => {this.accSelected = accData} );
  }
}


