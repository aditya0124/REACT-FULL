import React, { useId } from 'react'

function InputBox({
  label,  //laber for from pass kr rhe ho ya to
  amount,
  onAmountChange, //taki jo bhi component call kr rha h wha pe iski baat krenge
  onCurrencyChange, //
  currencyOption = [],  //our all currency from json data ,in from of array taki crash na ho if data n aaye user se
  selectCurrency = "usd",  // select kon si currency krni h data se
  amountDisable = false,     //kuch user amount dena chate h ya nhi dena chahte h,false meaans amount disable nhi h hum amount de skte  input m 
  currencyDisable = false,
  className = "",
})

//here in fn we take to many thing from user
// here classname in fn we take user css if he want some extra thing so in line 11 we write it in bactics and merge it with our css {SIMPLE PROPS}
 {
 const amountInputId = useId()//GENERATE UNIQUE ID NOT USE FOR KEYS 
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id='amountInputId'
                    className="outline-none w-full border-gray-600 border py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}  //isse ye pta chalega ki amount field jo h wo disable h ya enabled h
                    value={amount} // value kya h input k andar
                    //ab amount change ho rha h to kya kru so we use onchange
                    // onchange ko use kaise kru ki mere component se sabko pta lag jaye ki value(Amount) change ho gya h
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}//jaise hi value change ho to kya krna h ye btayega onAmountChange():- check krke btayega ki  onAmountchnge m Amount exist krta h k nhi h
                    //we use Number(e..) bcause we give value in form of string but it wan it in num so 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right ">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className=" border-gray-600 border rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOption.map((currency)=> (
                        <option key={currency} value={currency}>
                        {currency}
                    </option>
                    ))}
                
                {/* for performance under loop always use keys  */}
                </select>
            </div>
        </div>
  );
}

export default InputBox;