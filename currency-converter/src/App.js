import { useState } from 'react';
import './App.css';

import {InputBox} from './components/';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("INR");
  const [to,setTo] = useState("PKR");
 const [convertAmount , setConvertAmount] = useState(0);

 const currencInfo = useCurrencyInfo(from);

 const options = Object.keys(currencInfo);


 const swap = () =>{
  setFrom(to);
  setTo(from);
  setConvertAmount(amount);
  setAmount(convertAmount);
 }

const convert = () => {
  setConvertAmount(amount * currencInfo[to])
}

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/19528148/pexels-photo-19528148/free-photo-of-a-brick-wall-with-a-light-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize:'cover',
    }}
>
    <div className="w-full">
        <div className="w-full h-screen mx-auto flex items-center p-5 backdrop-blur-sm bg-black/30">
            <div className='w-1/2 mx-auto'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();                   
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions = {options}
                            onCurrencyChange = {(currency) => setFrom(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency = {from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-8 py-2 text-lg uppercase"
                            onClick={swap}   
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertAmount}
                            currencyOptions = {options}
                            onCurrencyChange = {(currency) => setTo(currency)}
                            selectCurrency = {to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert : {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
