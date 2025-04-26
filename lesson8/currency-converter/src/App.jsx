import './App.css'
import { useState } from 'react';
import {CurrencyDropdown} from './components/CurrencyDropdown';
import CurrencyContext from './contexts/CurrencyContext';

function App() {
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
  
    return (
      <CurrencyContext.Provider
        value={{ fromCurrency, setFromCurrency, toCurrency, setToCurrency }}
      >
        <h1>Currency Converter</h1>
        <CurrencyDropdown />
      </CurrencyContext.Provider>
    );
  }

export default App;
