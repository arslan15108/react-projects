
import {React, useId} from "react"


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}){

    const inputAmountId = useId();
    return(

            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={inputAmountId} className="text-black mb-2 inline-block text-lg font-bold">
                    {label}
                </label>
                <input
                    id={inputAmountId}
                    className="outline-none w-full bg-transparent py-1.5 text-lg"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full text-lg font-bold">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-1/2 p-3"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                   { currencyOptions?.map(option =>{
                   return <option key={option} value={option}>
                        {option}
                    </option>

                    })}
                                    
                </select>
            </div>
            </div>
    )
}

export default InputBox;
