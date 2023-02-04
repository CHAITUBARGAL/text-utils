import React, { useState } from 'react'


export default function TextForm(props) {
    const hadleUpClick=()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText= text.toUpperCase();
         setText(newText)
    }
    const hadleLoClick=()=>{
        // console.log("LowerCase was Clicked" + text);
        let newText= text.toLowerCase();
         setText(newText)
    }
    const hadleClearClick=()=>{
        // console.log("Clear text" + text);
        let newText= "";
         setText(newText)
    }
  

    
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value); 
    }
    const [text, setText] = useState('');
 
  return (
    <>
    <div className="container">
     
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={hadleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-1" onClick={hadleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-1" onClick={hadleClearClick}>Clear Text</button>
</div>
<div className="container my-2">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and  {text.length} character</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>

</>

    
  )
}
