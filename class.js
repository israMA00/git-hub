

export class App {
    
    static exercise = () => {

        const mySet = new Set();

        const myMap = new Map([
            ['user1', {name: 'isra', age: 41, id:123}],
            ['user2', {name: 'jose', age: 23, id:890}],
            ['user3', {name: 'maria', age: 15, id:456}],
            ['user4', {name: 'maria', age: 45, id:550}],
        ]);

        if(myMap.has('user1')){
            const getName = myMap.get('user1');
            getName.age = 42;
            myMap.set('user1', getName);
        }

        //adding user´s name to Set
        myMap.values().forEach(user => {
            mySet.add(user.name)
        });

        console.log(mySet);
    
    }
}clear
