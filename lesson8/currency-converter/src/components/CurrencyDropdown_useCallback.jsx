import { useEffect, useState, useCallback } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";

function CurrencyDropdown() {
  const [currencies, setCurrencies] = useState(null);
  const [defaultValueSelectOne, setDefaultValueSelectOne] = useState("Euro");
  const [defaultValueSelectTwo, setDefaultValueSelectTwo] = useState(
    "United States Dollar"
  );

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => setCurrencies(data.supported_codes))
        .catch(err => console.log(err))

  const handleSelectOneValue = useCallback((event) => {
    setDefaultValueSelectOne(event.target.value);
  }, []);

  const handleSelectTwoValue = useCallback((event) => {
    setDefaultValueSelectTwo(event.target.value);
  }, []);

  return (
    <>
      <div className="container">
        <p>I want to convert</p>
        <select
          className="from-select"
          value={defaultValueSelectOne}
          onChange={handleSelectOneValue}
        >
          {currencies &&
            currencies.map((cur) => <option key={cur[0]}>{cur[1]}</option>)}
        </select>
        <p>to</p>
        <select
          className="to-select"
          value={defaultValueSelectTwo}
          onChange={handleSelectTwoValue}
        >
          {currencies &&
            currencies.map((cur) => <option key={cur[0]}>{cur[1]}</option>)}
        </select>
      </div>
      <CurrencyConverter />
    </>
  );
}

export default CurrencyDropdown;