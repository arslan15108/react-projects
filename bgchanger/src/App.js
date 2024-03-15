import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor] = useState('black')
  return (
    <div className="App w-full h-screen flex items-center justify-center" style={{background:color}}>
          <h1 className='text-white text-5xl uppercase font-bold'>{color}</h1>

        <div className='flex flex-wrap justify-center w-full fixed bottom-12 px-[50px]'>
          <button onClick={()=>{setColor('red')}} className="bg-red-800 text-white py-2 px-6 mx-3 rounded-full shadow-lg">Red</button>
          <button onClick={()=>{setColor('blue')}} className="bg-blue-800 text-white py-2 px-6 mx-3 rounded-full shadow-lg">Blue</button>
          <button onClick={()=>{setColor('green')}} className="bg-green-800 text-white py-2 px-6 mx-3 rounded-full shadow-lg">Green</button>
          <button onClick={()=>{setColor('skyblue')}} className="bg-sky-800 text-white py-2 px-6 mx-3 rounded-full shadow-lg">Sky</button>
          <button onClick={()=>{setColor('black')}} className="bg-black text-white py-2 px-6 mx-3 rounded-full shadow-lg">Black</button>
        </div>
    </div>
  );
}

export default App;
