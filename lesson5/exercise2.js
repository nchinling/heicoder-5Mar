function fetchData() {
    // Write your code here
    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
          resolve("Data retrieved")
        }, 1000);
      
      })
      
      return dataPromise
    
}

function processData(data) {
    // Write your code here
    const processPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
        //   resolve(`${data} and processed`)
          resolve(data + " and processed")
        }, 2000);
      
      })
    return processPromise
    
}

function displayData(data) {
    console.log(data)
    
}

// Chaining the functions
fetchData()
    // data retrieved
    .then((data) => processData(data))
    // data + " and processed"
    .then((processedData) => displayData(processedData));