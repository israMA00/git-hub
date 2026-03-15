import { Account } from "./class.js";


(function (){

   const user1 = new Account('isra', 1000);
   user1.deposit(1000);
   user1.withdraw(2000);
   console.log(user1.transactions);
   console.log(user1.balance);

})()

