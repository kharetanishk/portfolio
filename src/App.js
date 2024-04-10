import './App.css';
import Profilepage from './components/Profilepage'
import Index from './components/Index';
import { useState } from 'react';

export default function App(){
  const[mode,setMode]=useState('search');
  const[name,setName]=useState('TANISHK');

  return(
    <>
      {
        mode === 'search'
          ? <Profilepage setMode={setMode} name={name} setName={setName} />
          : mode === 'index' ? <Index name={name} /> : false
      }
    </>
  );
}



