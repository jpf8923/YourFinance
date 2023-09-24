//Represent purchase info as a graph
import { Component } from '@angular/core';
import { GetAccountInfoService } from '../get-account-info.service';
import { Transaction } from '../Transaction';



@Component({
  selector: 'app-display-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
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
