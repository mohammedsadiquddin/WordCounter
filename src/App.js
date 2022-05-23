// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{ useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');

  const toggleState = ()=>{
    // console.log("clicked....")
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "maroon";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return ( 
    <>
    <Navbar title="WordCounter" about="about" mode={mode} toggleState={toggleState}/>
    <div className="container">
    <Textform heading="Enter text here to analyze" mode={mode}/>
    </div>
    </>
    );
}

export default App;
