import { useEffect, useState } from "react";
import { CurrencyConverter } from "./CurrencyConverter";
import './styles/dropdown.css'
import './styles/CurrencyStyling.css'

function CurrencyDropdown() {
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyFrom, setCurrencyFrom] = useState("USD");
    const [currencyTo, setCurrencyTo] = useState("SGD");
  
    useEffect(() => {
      fetch("https://v6.exchangerate-api.com/v6/417fa89113d9ba693c608ed2/codes")
        .then((res) => res.json())
        .then((data) => setCurrencyList(data.supported_codes));
    }, []);
  
    return (

      <div className="container">

        
<CurrencyConverter currencyFrom={currencyFrom} currencyTo={currencyTo} />
        <p>I want to convert</p>
        <select name="currency" id="currencySelect"
            onChange={(event) => {
            setCurrencyFrom(event.target.value);
            }}
            value={currencyFrom}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
        <p>to</p>
        <select 
            name="currency"
            id="currencySelect"
            onChange={(event) => {
            setCurrencyTo(event.target.value);
            }}
            value={currencyTo}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
      </div>
    );
  }
  
  export {CurrencyDropdown};