import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { accountData } from './accountData'
import { MOCKACCOUNTDATA } from './mockAccountData';
@Injectable({
  providedIn: 'root'
})
export class GetAccountInfoService {
  constructor() {}
  //Use of observable to handle asynchronous data calls
  //Asynchronous data call:Data call is handled as the rest of the application runs (UI, etc.)
  //Synchronous data call:Data call freezes rest of the application(UI, etc.) until it is handled
  getData(): Observable<accountData>{
    const acc : Observable<accountData> = of(MOCKACCOUNTDATA);
    return acc;
  }
}
