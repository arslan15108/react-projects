
import './App.css';
import { useEffect, useId, useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount , setAmount] = useState(1);
  const [from,setFrom] = useState('USD');
  const [to,setTo] = useState('PKR');
  const [convertAmount, setConvertAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from);
console.log(currencyInfo);
  const options = Object.keys(currencyInfo);

  function convert(){
    setConvertAmount(amount * currencyInfo[to])
  }

  function swap(){
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  }  
 
  useEffect(()=>{
    setConvertAmount(amount * currencyInfo[to]);
    console.log("-");
  },[currencyInfo])


  return (
    <div
    className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/19528148/pexels-photo-19528148/free-photo-of-a-brick-wall-with-a-light-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize:'cover',
    }}
>
    <h1 className='text-2xl font-bold text-center text-white'>Currency Converter</h1>

    <form onSubmit={(e) => {
                        e.preventDefault();
                        convert();                   
                    }}>
        <InputBox
          label="From"
          amount = {amount}
          currencyOptions={options}
          onCurrencyChange = {(currency) => setFrom(currency)}
          onAmountChange= {(amount)=> setAmount(amount)}
          selectCurrency={from}
        />
        <div className="relative w-full h-0.5">
            <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-8 py-2 text-lg uppercase"
                onClick={swap}   
            >
                swap
            </button>
        </div>

        <InputBox
          amount = {convertAmount}
          currencyOptions={options}
          onCurrencyChange = {(currency) => setTo(currency)}
          onAmountChange= {(amount)=> setAmount(amount)}
          selectCurrency={to}
          label="To"
          amountDisable
        />
         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert : {from.toUpperCase()} to {to.toUpperCase()}
        </button>
    </form>



    </div>
  );
}

export default App;
