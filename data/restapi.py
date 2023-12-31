from flask import Flask
from flask_cors import CORS

from database import getAccountFromID, getTransactionsFromAccountID

app = Flask(__name__)

cors = CORS(app)




@app.route("/")
def defaultPage():
    return '<h1 style="font-size:50px;">You are on the default Bank Data API Page </h1>' \
        '<a style="font-size:40px;underline:true;"> Quick links below:</a><br>' \
        '<a style="font-size:30px;" href="/account/A00313">Account Info Get Request </a><br>' \
        '<a style="font-size:30px;" href="/transactions/A00313">Account Transactions Get Request</a><br>' \
        '<a style="font-size:30px;" href="/transactions/A00313/medias">Account Transaction Medias Get Request</a><br>' \
        '<a style="font-size:30px;" href="/transactions/A00313/dates">Account Transaction Dates Get Request</a><br>'

@app.route("/account/<account_id>", methods=["GET"])
def getAccountInformation(account_id):
    # Use database.py method.
    return getAccountFromID(account_id)

@app.route("/transactions/<account_id>", methods=["GET"])
def getAccountTransactions(account_id):
    # Use database.py method.
    return getTransactionsFromAccountID(account_id)


@app.route("/transactions/<account_id>/medias", methods=["GET"])
def getAccountTransactioMediasTotalled(account_id):
    # Use database.py method.
    transactions = getTransactionsFromAccountID(account_id)
    print(transactions)
    medias = {
        'Credit_Card': 0,
        'Debit_Card': 0,
        'Credit': 0,
        'Cash': 0,
    }

    for t in transactions:
        try:
            media = t[3]
            match media:
                case "Credit_Card":
                    medias['Credit_Card'] += 1 
                case "Debit_Card":
                    medias['Debit_Card'] += 1 
                case "Cash":
                    medias['Cash'] += 1 
                case "Check":
                    medias['Cash'] += 1 
        except IndexError:
            print("Index out of range.")

    return medias

@app.route("/transactions/<account_id>/dates", methods=["GET"])
def getDatesOfRecentTransactions(account_id):
    # Use database.py method.
    transactions = getTransactionsFromAccountID(account_id)

    dates = []

    for t in transactions:
        print(t)
        dates += [t[2]]

    return dates


# getTransactionsFromAccountID

# @app.route("transactions/<account_id>", method=["GET"])
# def 


app.run()