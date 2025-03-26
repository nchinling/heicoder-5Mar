// calculate total in array
// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// let total = 0;

// for (let i=0; i< MSFTStockClosingPrices.length; i++) {
//   total = total + MSFTStockClosingPrices[i];
// }

// for (let i=0; i<=4; i++) {
//   total = total + MSFTStockClosingPrices[i];
// }

// console.log(total); 



// sum all in array
const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    
    
let total = 0;
    
    for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
      total += MSFTStockClosingPrices[i].Monday +
               MSFTStockClosingPrices[i].Tuesday +
               MSFTStockClosingPrices[i].Wednesday +
               MSFTStockClosingPrices[i].Thursday +
               MSFTStockClosingPrices[i].Friday;
    }
    
    console.log(total);
    

// for-of loop => works with array

for (let price of MSFTStockClosingPrices){
    console.log(price);
}


// for-in loop => works with objects

const dataObj = {
    Monday: 333,
    Tuesday: 75,
    Wed: 55,

}

for (let day in dataObj){
    console.log(day);
    console.log(dataObj[day]);
}


//Exercise 3
const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    
    
    let total = 0;
    
    for (week of MSFTStockClosingPrices) {
      // Loop through each day's price in the week
      for (day in week) {
        total += week[day]; // Add the price to the total
      }
    }
    
    console.log(`The total sum of closing prices of MSFT is ${total.toFixed(2)}`);