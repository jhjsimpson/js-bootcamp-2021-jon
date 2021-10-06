/*
Shopping Basket Challenge

We should be able to :

Create a shopping basket that should have a total of 0
Create a class

Be able to add a single item and have its value added to total


Be able to add multiple items and accumulate the total of the items

Be able to add the same items multiple times and accumulate the total of items

retrieve total at any time
add one item to add to total
multiple items to add to the total

item structure
how to take values out
item class as well?
shopping basket class?
cals
*/

// ======

class ShoppingBasket {
  //inherits item
  constructor(total, items) {
    this.items = { name: name, price: price };
    this.total = this.total = 0;
  }
  setnewItems(newItems) {
    this.items.push(newItem);
  }

  // function addItems - could use rest
  // Array that takes items classes (quantity, name, price)
  // loop through items and add to total
  // muliply quantity with price
  // retrieve quantity, price * together and add together inside

  // function addItems - could use rest operator

  /*getItems() {
          return this.Itams;
      } */
}

const myBasket = new ShoppingBasket(0, ["carrot"]);

console.log(myBasket);

/*
  class ShoppingBasket { //inherits item
      constructor(total, items) {
          this.items = items;
          this.total = 0;
      }
      setNewItem(newItem) { // changed
          this.items.push(newItem); // changed
      }
  
      // function addItems -  could use rest operator
      // takes in an array that take item class object (name, quantity, price per unit)
      // loop through the array, item class getCost would return quant * price
      // add cost pu to the total
  
      getTotal() {
          return this.total;
      }
  };
  
  const myBasket = new ShoppingBasket(0, ['carrot']);
  myBasket.setNewItem('broccoli'); // changed
  console.log(myBasket);
  */
