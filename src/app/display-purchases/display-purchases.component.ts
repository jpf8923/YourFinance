//Display list of purchases
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { purchaseData } from '../purchaseData';
@Component({
  selector: 'app-display-purchases',
  templateUrl: './display-purchases.component.html',
  styleUrls: ['./display-purchases.component.css']
})
export class DisplayPurchasesComponent {
  pList?: purchaseData[];
  ngOnInit(){
    this.getPurchaseData();
  }

  constructor(private getter:GetAccountInfoService){}

  getPurchaseData(){
    this.getter.getData().subscribe( (accData) => {this.pList = accData.purchaseList} );
  }

}
