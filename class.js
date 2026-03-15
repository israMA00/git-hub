//add comments

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
        //return a copy transactions...
        return [...this.#transactions]
    }

    deposit(amount){
        //method deposit
        if(typeof amount !== 'number' || amount <= 0){
            throw new Error('invalid transaction')
        }
        this.#balance += amount

        this.#transactions = [...this.#transactions, {type: 'deposit', amount}]
    }

    withdraw(amount){
        //method withdraw..
        if(typeof amount !== 'number' || amount <= 0){
            throw new Error('invalid transaction')
        }

        const preBalance = this.#balance - amount;

        if(preBalance < 0){
            throw new Error('Insufficients founds')
        }

        this.#balance -= amount;
        this.#transactions = [...this.#transactions, {type: 'withdraw', amount}]
    }

}







