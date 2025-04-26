import './App.css'
import { useEffect } from "react";

function App() {

  function handleMouseOver() {
    alert('Just moused!');
  }

  function handleSelectOption(){
    alert('New option selected')
  }



  //useEffect calls from the side. e.g. displaying data with call obtained from api
  useEffect(() => {
    console.log("Making API request");
  }, []);

  return (



    <>



{/* exercise 6 */}
      <h1>Currency Converter</h1>
      <select onChange={handleSelectOption} name="currency" id="currencySelect">
  <option value="usd">USD</option>
  <option value="jpy">JPY</option>
  <option value="sgd">SGD</option>
  <option value="myr">MYR</option>
</select>


{/* exercise 5 */}
      {/* <button onMouseOver={handleMouseOver}>
        Click me
      </button> */}
    </>
  )
}

export default App;
