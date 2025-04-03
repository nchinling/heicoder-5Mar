Example Question:
p.then(value => console.log(value));

Question 1:
const p = Promise.resolve('resolved');
p.then(value => console.log(value));


Question 2:
const p = Promise.reject(new Error('Oops!'));
p.catch(error => console.error(error));

Question 3:
const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then(value => console.log(value));

Question 4:
const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then(value => console.log(value.name));

Question 5:
const p = Promise.reject(new Error('Invalid id'));
p.catch(error => console.error(error));

Question 6:
const p = Promise.resolve(42);
p.finally(() => console.log("Promise settled"));

Question 7:
const p = Promise.resolve(21);
p
  .then((value) => 2*value)
  .then(finalValue => console.log(finalValue))

Question 8:
const p = Promise.reject(new Error('Invalid value'));
p.catch(error => 0).then(value => console.log(value))

Question 9:
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
Promise.all(promises).then((values) => {
    console.log(values);
  });

Question 10:
const promises = [
    new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
    new Promise(resolve => setTimeout(() => resolve('b'), 50)),
    new Promise(resolve => setTimeout(() => resolve('c'), 150))
  ];
  
  
  Promise.race(promises).then((value) => {
    console.log(value);
  });

Bonus Question:
const p = Promise.resolve('World');

p
  .then((message) => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        resolve("Hello " + message);
      }, 1000);
    });
  })
  .then(finalValue => {
    console.log(finalValue);
  });


