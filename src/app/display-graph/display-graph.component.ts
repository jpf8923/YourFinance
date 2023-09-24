//Represent purchase info as a graph
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { Transaction } from '../Transaction';



@Component({
  selector: 'app-display-graph',
  templateUrl: './display-graph.component.html',
  styleUrls: ['./display-graph.component.css']
})
export class DisplayGraphComponent {
  pList?: Transaction[];
  ngOnInit(){
    this.getPurchaseData();
  }

  constructor(private getter:GetAccountInfoService){
    
  }

  getPurchaseData(){
    this.getter.getData().subscribe( (accData) => {this.pList = accData.transactionHistory} );
  }
}
