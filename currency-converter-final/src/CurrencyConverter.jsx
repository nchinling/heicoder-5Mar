import { useContext, useEffect, useState } from "react";
import CurrencyContext from "./contexts/CurrencyContext";

function CurrencyConverter() {
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const currencyContextValue = useContext(CurrencyContext);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        currencyContextValue.currencyFrom +
        "/" +
        currencyContextValue.currencyTo +
        "/" +
        fromAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.conversion_result));
  }, [
    fromAmount,
    currencyContextValue.currencyFrom,
    currencyContextValue.currencyTo,
  ]);

  function onUserInput(event) {
    setFromAmount(event.target.value);
  }

  return (
    <div className="container">
      {/* Controlled component */}
      <input
        value={fromAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={onUserInput}
      />
      <p>{currencyContextValue.currencyFrom}</p>
      <p>=</p>
      <p className="converted-amount">{convertedAmount}</p>
      <p>{currencyContextValue.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
