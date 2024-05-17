import { useEffect,useState } from "react";
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json
 // we take that cuurency by which wrt to we calculate the currency and it is "from currency" in App.jsx
function UseCurrencyInfo(currency) {
  const [data,setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`).then((res)=> res.json())
    .then((res) => setData(res[currency]))
    // currency passed in fn is used for change in api html so if it is inr.json it give all curr w.r.t to inr
    //.then give a callback and we convert our response in json
    //The .then() method in JavaScript is like a way to say, "Hey, do this after that's done."
    // 1at then so here after fetching API do this(convert to json)  NOW we hold this data
// 2nd then is used for response(API) k andar se key(inr,usd,...) nikal lo and give it to setDATA for updation  || setData res k andar se key ki help se nikaega
//NOW WE WANT it call FN. when our currency change so CURRENCY is a dependency for which we want our daata change 

  }, [currency])
 
  console.log(data)

return data


}
export default UseCurrencyInfo;
//we return whole method(useCurrencyinfo) here and we also return Value like inbuilt hook and we get  this value from same method
//so useCurrency info is like custom hook which return a value(data) and a method(uCurrencyinfo) 
//and SAME as in inbuilt hook we also gget a method named as setMethodName at index 1 and VALUE at index 0 which we get from that method

// how we get dat ais like this :-
//{key}"$myro": 3.31372968{value}


// Fetching Data: The useCurrencyInfo hook fetches data from an API endpoint based on the currency parameter passed to it. The API endpoint URL is constructed dynamically to fetch currency data specific to the provided currency.

// Storing Data: Once the data is fetched, it's stored in the component state using the useState hook. The fetched data likely includes information about various currencies relative to the provided base currency.

// Returning Data: The hook returns the fetched data, which is likely an object containing information about currencies relative to the base currency (from). This object could include exchange rates, currency codes, names, symbols, etc.