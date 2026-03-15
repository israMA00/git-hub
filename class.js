

export class Account {

    #balance = 0;
    #transactions = []

    constructor(user, initialDeposit){
        this.user = user;
        this.#setInitialDeposit(initialDeposit) 
       
    }

    #setInitialDeposit(deposit){
        if(deposit < 0){
            throw new Error('Invalid transaction');
        }
       this.#balance = deposit;
       this.#transactions.push({type: 'deposit', deposit})

    }
    get balance(){
        return this.#balance;
    }
    get transactions(){
        return this.#transactions
    }

}







