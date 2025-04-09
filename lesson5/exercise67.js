//Exercise 6
fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=xxx').then(
    response => response.json()
  ).then(
    data => console.log(data)
  );

//Exercise 7
fetch('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=xxx').then(
    response => response.json()
  ).then(
    data => {console.log(data)

    const earnings = data["annualEarnings"]
    for(let i = 0; i <earnings.length; i++){
        const currentEarnings = earnings[i]
        if(currentEarnings["fiscalDateEnding"].includes("2020")){
            console.log(earnings["reportedEPS"])
            return
        }

    }
  })