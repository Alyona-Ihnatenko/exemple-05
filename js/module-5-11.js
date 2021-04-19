class Car {
    #brand;
   
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }
    getBrand(){
    return this.#brand;
    }
    changeBrand(newBrand){
      this.#brand=newBrand;
    }
  }
  const collectionOfFriends = {
    friendOne: {
        name: 'Alex',
        age: 25,
    },

    friendSecond: {
        name: 'Peter',
        age: 43,
    }
   
};

const collectionOfMySuperFriends = {
    friendOne: {
        name: 'Nina',
        age: 25,
    },

    friendSecond: {
        name: 'Freda',
        age: 43,
    },

    friendSecond: {
        name: 'Peter',
        age: 43,
    }
};


const lookAFriend = (myObject1, myObject2) => {
    const myArrayOfFriends1 =[];
    const myArrayOfFriends2 =[];
    const getObjectOfFriends1 = Object.values(myObject1)
    for (const friend of getObjectOfFriends1){
        myArrayOfFriends1.push(friend.name);
    };
    

    const getObjectOfFriends2 = Object.values(myObject2)
    for (const friend of getObjectOfFriends2){
        myArrayOfFriends2.push(friend.name);
    };

    for (const friend of myArrayOfFriends1) {
        if (myArrayOfFriends2.includes(friend)){
            return friend;
        }

    }
};
console.log(lookAFriend(collectionOfMySuperFriends, collectionOfFriends))
