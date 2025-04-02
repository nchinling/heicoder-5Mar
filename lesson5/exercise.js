//Exercise 1

function getNumberPromise() {

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(10)
      }, 2000);
    
    })
    
    return myPromise
  
  }
  
  // Test the function
  getNumberPromise().then((value) => {
      console.log(value); // Should log 10 after 2 seconds
  });