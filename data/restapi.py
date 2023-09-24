from flask import Flask
from flask_cors import CORS

from database import getAccountFromID, getTransactionsFromAccountID

app = Flask(__name__)

cors = CORS(app, resources={r"/transactions/A00351": {"origins": "http://localhost:4200"}})

@app.route("/account/<account_id>", methods=["GET"])
def getAccountInformation(account_id):
    # Use database.py method.
    return getAccountFromID(account_id)

@app.route("/transactions/<account_id>", methods=["GET"])
def getAccountTransactions(account_id):
    # Use database.py method.
    return getTransactionsFromAccountID(account_id)


# getTransactionsFromAccountID

# @app.route("transactions/<account_id>", method=["GET"])
# def 


app.run()