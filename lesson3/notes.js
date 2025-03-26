
// String literals
const formattedRating = `My Rating for this Drink is ${rating}/${maxScore}`;

// string --> int
age = parseInt(age);

// Int --> String
age = age.toString();


//array operations
array.push(90); 
array.shift(40);
array.push(50);
array.unshift(200);

array.slice(1,4)
//select index 1 to 3 (4 - 1)

TSLAClosingPrices.pop(); // remove the LAST element from the back.
TSLAClosingPrices.shift(); // remove the first element from the front
TSLAClosingPrices.push(100.0); // adds an element TO THE BACK
TSLAClosingPrices.unshift(900); // adds an element to the FRONT

TSLAClosingPrices = TSLAClosingPrices.slice(1, 4);
TSLAClosingPrices = TSLAClosingPrices.sort();
TSLAClosingPrices = TSLAClosingPrices.reverse();

//Objects
const inventoryItemCookie = {
    itemName: "cookie",
    qty: 100,
    price: "SG$1.10",
  };
  
  const formattedMessage = `The price of a ${inventoryItemCookie.itemName} is ${inventoryItemCookie.price}`;
  console.log(formattedMessage);