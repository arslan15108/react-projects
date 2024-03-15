
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [password,setPassword] = useState('');
  const [isNumber,setIsNumber] = useState(false);  
  const [isChar,setIsChar] = useState(false);  
  const [length, setLength] = useState(8);
  const [copySuccess,setCopySuccess] = useState('');
  // useRef hook

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumber) str += "0123456789";
    if(isChar) str += "!@#$%&*(){}~-_+=";

    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1) ;

      pass += str.charAt(char);
    }
    setPassword(pass);


  },[length,isNumber,isChar,setPassword])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
    setCopySuccess('Copied');
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,isNumber,isChar,passwordGenerator])


  return (
    <div className="App w-full h-screen bg-black flex items-center justify-center">
      <div className='w-1/2 bg-gray-700 rounded-lg px-3 py-5'>
        <div className='form-handler'>
          <div>
            <input type='text' className='rounded-l-md p-3 w-11/12' placeholder='Password' readOnly value={password} ref={passwordRef}/>
            <button className='bg-blue-700 text-white p-[12.2px] rounded-r-md' onClick={copyToClipBoard}>Copy</button>
            {copySuccess}
          </div>
          <div className='filters-wrapper mt-3'>
            <input type='range' min={6} max={80} value={length} onChange={(e) => {setLength(e.target.value)}}/>
            <label className='text-orange-300 mx-2'>Length ({length})</label>

            <input type='checkbox' onChange={() => {
              setIsNumber((prev) => !prev)
            }} />
            <label className='text-orange-300 mx-2'>Numbers</label>

            <input type='checkbox' onChange={() => {
              setIsChar((prev)=> !prev);
            }} />
            <label className='text-orange-300 mx-2'>Special Character</label>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
