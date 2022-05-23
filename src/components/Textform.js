import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleUpperCase = ()=>{
    setText(text.toUpperCase());
  }

  const handleLowerCase = ()=>{
    setText(text.toLowerCase());
  }

  const revString = () =>{
  var t=text.split("");
  var b=t.reverse();
  setText(b.join(""));
  }
  
  const clearText = () =>{
    setText("");
  }

  const copyText = () =>{
    var copiedText=document.getElementById('desc');
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
  }

  const removeExtraSpaces = ()=>{
    let text2=text.replace(/\s{2,}/g, ' ').trim()
    setText(text2);
  }
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
   <h1 style={{textAlign:"center"}}>{props.heading}</h1>
   <h5 style={{textAlign:"center"}}>A simple webpage WordCounter</h5>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="desc" value={text} onChange={handleOnChange} rows="6" style={{backgroundColor:props.mode === 'dark'?'darkblue':'white',color:props.mode === 'dark'?'white':'black'}}
  ></textarea>
</div>  
<button className="btn btn-primary" onClick={handleUpperCase} >Convert to UpperCase</button>
<button className="btn btn-primary" onClick={handleLowerCase} >Convert to lowercase</button>
<button className="btn btn-primary" onClick={revString} >Reverse Text</button>
<button className="btn btn-primary" onClick={clearText} >Clear Text</button>
<button className="btn btn-primary" onClick={copyText} >Copy Text</button>
<button className="btn btn-primary" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p style={{color:props.mode === 'dark'?'gold':'red',fontWeight:'bold'}}>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words,{text.trim().length} characters,{text.split(/[.!?](?!\d)/g).filter(Boolean).length} sentences and {text.replace(/\n$/gm,'').split(/\n/).filter(Boolean).length} paragraphs</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}