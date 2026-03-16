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


//Library register
export class Item {

    #id
    #title
    
    constructor(id, title){

        if(new.target === Item){
            throw new Error('Cannot onstance this class')
        }

        this.#id = id;
        this.title = title
    }
    set title(newTitle) {

        if(typeof newTitle !== 'string'){
            throw new Error('invalid title')
        }

        this.#title = newTitle

    }

    get title(){
        return this.#title
    }

    get id(){
        return this.#id
    }
    
    getInfo(){
        throw new Error('Cannot use this fuction..')
    }
}

class Book extends Item {

    #autor
    #available = true;
    
    constructor(id, title, autor){
        super(id, title);
        this.#autor = autor;
    }

    markAsLoaned(){
        if(!this.#available){
            throw new Error('Book is not available')
        }
        this.#available = false
    }

    markAsAvailable(){
        this.#available = true;
    }

    get available(){
        return this.#available
    }
    get autor(){
        return this.#autor
    }

    getInfo(){
        return `id: ${this.id} / title: ${this.title} / autor: ${this.autor}`;
    }
}

class Library {

    static #collection = new Map(); 

    addBook(book){

        if(Library.#collection.has(book.id)){
            throw new Error('book is registered');
        }

        Library.#collection.set(book.id, book);
    }

    removeBook(id){
        if(Library.#collection.has(id)){
            Library.#collection.delete(id);
        }
    }

    getcollection(){

        const collection = [...Library.#collection.values()].map(element => {
            
            return `Book: ${element.title} - Availabel: ${element.available}`
        });

        return collection
        
    }

    loanBook(id){

        if(Library.#collection.has(id)){
            
            const book = Library.#collection.get(id);
            book.markAsLoaned();


        }else{
            throw new Error('book not exist.')
        }

    }

    receiveBook(id){

         if(Library.#collection.has(id)){
            
            const book = Library.#collection.get(id);
            book.markAsAvailable();

        }else{
            throw new Error('book not exist.')
        }

    }
}

const book1 = new Book(1, '1998', 'isra molina');
const book2 = new Book(2, 'rebelion en la granja', 'george orwell');
console.log(book1);







































