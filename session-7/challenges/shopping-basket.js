/*
Create a shopping basket and have a total of 0 as it’s initial value.
Be able to add a single item and have it’s value added to the total.
 Be able to add multiple items and accumulate the total of the items.
Be able to add the same items multiple times and accumulate the total of items.
*/

class shoppingBasket {
  constructor(product, total) {
    this.product = product;
    this.total = total;
  }

  addItem(product, total) {
    this.product = product;
    this.total = total;
  }

  /*
    getBasket() {
        // returns name of items and cost, and total cost
        return 
    }
    */
}

const myBasket = new shoppingBasket("Carrot", 5);
console.log(myBasket);

/*
    getName() {
      return this.name;
    }
  }
*/
