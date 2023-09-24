//interface in this case is available to other modules
//Account data also needs:
//Recent purchases
    //Datas of purchases
    //Amount of money spent
    //Name of the purchase
    //Purchase type

export interface Transaction {
    transaction_id: number;
    account_id: String;
    transaction_date: String;
    transaction_type: String;
    transaction_amount: number;
}