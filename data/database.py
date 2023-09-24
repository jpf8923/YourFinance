import csv

# CSV Files.
bankCustomerDataFile = open("data/Bank_Customer_Data.csv")

def getRandomAccountData():
    pass

# Returns Account information from an Account ID.
def getAccountFromID(account_id):
    file = open("data/Bank_Account_Data.csv")
    csvReader = csv.reader(file)

    for row in csvReader:
        if (row[0] == account_id):
            return row
    return "Couldn't find your Account ID! Try A00975 or similar"

def getTransactionsFromAccountID(account_id):
    file = open("data/Bank_Transacation_Data.csv")


    csvReader = csv.reader(file)

    transactions = []
    
    for row in csvReader:

        if (row[1] == account_id):
            transactions += [row]

    if (len(transactions) == 0):
        return 'Transactions Empty! Try A00351 or similar.\n Maybe restart the python script as well.'

    return transactions