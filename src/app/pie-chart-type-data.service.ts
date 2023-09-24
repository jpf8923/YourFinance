//Only return data for an exact type.
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from './Transaction';
import { pieData } from './pieData';
@Injectable({
  providedIn: 'root'
})
export class PieChartDataService {

  constructor() { }
  
  
  getData(transactionList:Transaction[]): Observable<pieData[]>{
    let data : pieData[] = [];
    //Initialize the initial label data
    for(let i = 0; i < transactionList.length;i++){
      let labelCurrentlyExists : boolean = false;
      for(let j = 0; j < data.length; j++){
        if(transactionList[i].transaction_type === data[i].label){
          data[i].value += transactionList[i].transaction_amount;
          labelCurrentlyExists = true;
          break;
        }
      }
      if(labelCurrentlyExists === false){
        data.push({label : transactionList[i].transaction_type, value: 0});
      }
    }
    const d : Observable<pieData[]> = of(data);
    return d;
  }
}
