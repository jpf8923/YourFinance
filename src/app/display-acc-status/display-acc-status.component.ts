//Display the account status data
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { accountData } from '../accountData';
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

  constructor(private getter:GetAccountInfoService){
  }
  
  getAccountData(){
    this.getter.getData().subscribe( (accData) => {this.accSelected = accData} );
  }
}
