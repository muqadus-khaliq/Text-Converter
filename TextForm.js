import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUPClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const  handleloClick=()=>{
    // console.log("LowerCase was clicked:"+ text)
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert(`text converted to lowercase`,`success`);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
const handlestopclicked=()=>
  {
      //console.log("StopListen Text was clicked"+ text);
      window.speechSynthesis.cancel()

  }
  
  const handleCptext=() =>{
    let text = document.getElementById("Text");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert(`Text Copied To Clipboard`,`success`);
     

  } 
 
 
  
 
  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea style={{ color: 'rgb(13, 26, 38)',backgroundColor: `#cacdcf` }}
      
          className="form-control custom-textarea"
          value={text}
          onChange={handleOnChange}
          id="Text"
          rows="8"   
           
        ></textarea>
        <br /><br />
        {/* all buttons  performance code here */}
        <button className="btn btn-secondary mx-2"   onClick={handleUPClick}>Convert To UpperCase</button>
        <button className="btn btn-secondary mx-2"   onClick={handleloClick} >Convert To LowerCase</button>
        <button className="btn btn-secondary mx-2"   onClick={speak} >Speak</button>
        <button className="btn btn-secondary mx-2"   onClick={handlestopclicked}>Stop Listening </button>
        <button className="btn btn-secondary mx-2" onClick={handleCptext}>Copy </button>  
        
         
        {/* <button className="btn btn-primary mx-2" onClick={handleCPClick}>Capitalized case</button>  */}
         {/* <button className="btn bt primary mx-2" onClick={handleDwtext}>Download Text</button>  */}
        {/* <button className="btn bt primary mx-2" onClick={handleCltext}>Clear Text</button> */}


      </div>
      <div className="container" mb-3={true.toString()}>
            <h1>Your Text Summary</h1>
        <p> {text.split(" ").length}     your words are {text.length}   characters </p>

<p> {0.008*text.split(" ").length}minutes read</p>
<h2>preview</h2>
 
<p>    { text}</p>
      </div>
    </>
  );
}
