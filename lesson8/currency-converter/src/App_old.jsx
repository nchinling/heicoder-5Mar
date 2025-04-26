import './App.css'
// import { DropDownList } from './components/Dropdown'
import {CurrencyDropdown} from './components/CurrencyDropdown';

function App() {

  return (
    <>
      <h1>Currency Converter</h1>
      <div className="converter-row">

      <CurrencyDropdown />
      {/* I want to convert <DropDownList /> to <DropDownList /> */}
      </div>
      <button>
        Click me
      </button>
    </>
  )
}

export default App;
