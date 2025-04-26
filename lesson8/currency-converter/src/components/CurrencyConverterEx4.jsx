import { useEffect, useState } from "react";

function CurrencyConverter(props) {
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("");

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/" +
        props.currencyFrom +
        "/" +
        props.currencyTo +
        "/" +
        fromAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.conversion_result));
  }, [fromAmount, props.currencyFrom, props.currencyTo]);

  function onUserInput(event) {
    setFromAmount(event.target.value);
  }

  return (
    <div className="container">
      <input
        value={fromAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={onUserInput}
      />
      <p>{props.currencyFrom}</p>
      <p>=</p>
      <p className="converted-amount">{convertedAmount}</p>
      <p>{props.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;