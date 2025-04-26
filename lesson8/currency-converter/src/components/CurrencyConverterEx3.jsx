import { useEffect, useState } from "react";

function CurrencyConverter() {
    const [currencyList, setCurrencyList] = useState([]);
  
    // useEffect(() => {
    //   fetch("https://v6.exchangerate-api.com/v6/417fa89113d9ba693c608ed2/codes")
    //     .then((res) => res.json())
    //     .then((data) => setCurrencyList(data.supported_codes));
    // }, []);  
  
    return (
      <div className="container">

    <input
        // value={""}
        placeholder="Enter amount"
        className="converter-input"
        onChange={() => {}}
      />

        <p>EUR</p>
        <p>=</p>
        <p className="converted-amount">2</p>
        <p>USD</p>

      </div>
    );
  }
  
  export {CurrencyConverter};