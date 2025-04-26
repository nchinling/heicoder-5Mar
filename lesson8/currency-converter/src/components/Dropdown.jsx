import './styles/dropdown.css'
import { useEffect, useState } from "react";



function DropDownList() {

    const dropDownOptions = ["USD", "JPY", "SGD", "MYR", "THB"];

    const [options, setOptions] = useState([]);

    // useEffect(() => { fetch('https://v6.exchangerate-api.com/v6/417fa89113d9ba693c608ed2/codes')
    //     .then(response => response.json())
    //     .then(data => console.log(data));}, []);

    
        useEffect(() => {
            fetch('https://v6.exchangerate-api.com/v6/417fa89113d9ba693c608ed2/codes')
              .then(response => response.json())
              .then(data => setOptions(data.supported_codes))
              .catch(error => console.error("Failed to fetch currency codes:", error));
          }, []);



    return (
        // <input value={userValue}
        // placeholder="Enter amount"
        // className=""
        // onChange = {(e)  =>{
        //     const intValue = parseInt(e.target.value);
        //     if (t)
        // }}
    <select className="dropdown" name="currency" id="currencySelect">
        {options.map((currency)=> (
            <option value={currency[0]}>{currency[1]}</option>
        ))
        }
  </select>
  )
}

export { DropDownList }






// import './styles/dropdown.css'



// function DropDownList() {

//     const dropDownOptions = ["USD", "JPY", "SGD", "MYR", "THB"];

//     const [options, setOptions] = useState([]);

//     // useEffect(() => { fetch('https://v6.exchangerate-api.com/v6/417fa89113d9ba693c608ed2/codes')
//     //     .then(response => response.json())
//     //     .then(data => console.log(data));}, []);

    
//         useEffect(() => {
//             fetch('https://v6.exchangerate-api.com/v6/417fa89113d9ba693c608ed2/codes')
//               .then(response => response.json())
//               .then(data => setOptions(data))
//             //   .then(data => {
//             //     if (data && data.supported_codes) {
//             //       setOptions(data.supported_codes);
//             //     }
//             //   })
//               .catch(error => console.error("Failed to fetch currency codes:", error));
//           }, []);



//     return <select className="dropdown" name="currency" id="currencySelect">
//         {options.map((currency)=> (
//             <option key={currency} value={currency}>{currency}</option>
//         ))
//         }
//     {/* <option value="usd">USD</option>
//     <option value="jpy">JPY</option>
//     <option value="sgd">SGD</option>
//     <option value="myr">MYR</option> */}
//   </select>
// }

// export { DropDownList }