import { useContext, useEffect } from "react";
import "./CurrencyStyling.css";
import { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyContext from "./contexts/CurrencyContext";

function CurrencyDropdown() {
  const [currencyList, setCurrencyList] = useState([]);
  // const [currencyFrom, setCurrencyFrom] = useState("USD");
  // const [currencyTo, setCurrencyTo] = useState("SGD");
  const currencyContextValue = useContext(CurrencyContext);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
      .then((res) => res.json())
      .then((data) => setCurrencyList(data.supported_codes));

    // setCurrencyList([
    //   ["USD", "United States Dollar"],
    //   ["SGD", "Singapore Dollar"],
    // ]);
  }, []);

  return (
    <div>
      <div className="container">
        <p>I want to convert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            currencyContextValue.setCurrencyFrom(event.target.value);
          }}
          value={currencyContextValue.currencyFrom}
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
            currencyContextValue.setCurrencyTo(event.target.value);
          }}
          value={currencyContextValue.currencyTo}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
      </div>
      {/* <CurrencyConverter
        currencyFrom={currencyContextValue.currencyFrom}
        currencyTo={currencyContextValue.currencyTo}
      /> */}
      <CurrencyConverter />
    </div>
  );
}

export default CurrencyDropdown;
