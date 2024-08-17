import React, {useState} from "react";

export default function TexthtmlForm(props) {
  const change_mode = (mode)=>{
    if(mode === 'dark')return 'light';
    if(mode === 'light')return 'dark';
    else{
      return 'light';
    }
  }
  const change_textarea = (mode) =>{
    if(mode === 'dark'){
      return "black" ;
    }
    if(mode === 'light'){
      return "white"
    }
    if(mode === 'primary'){
      return "#0e0e60";
    }
     if(mode === 'success'){
      return "#074e07";
    }
  if(mode === 'danger'){
      return "#6a1313";
    }
    if(mode === 'warning'){
      return "#a4a410";
    }
  }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handleClrClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text box","success")
    }
    const handleSenClick = () =>{
      let newText = text.toLowerCase();
      newText = newText.split('.');
        for(let i = 0;i<newText.length;i++){
          for(let j=0;j<newText[i].length;j++){
            if(newText[i][j]>='a' && newText[i]<='z'){
            newText[i]=newText[i].slice(0,j)+newText[i][j].toUpperCase()+newText[i].slice(j+1);   
            break;   
          }
          }
        }
        setText(newText.join('.'));
        props.showAlert("Converted to sentences","success")
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces shave been removed","success")
    }
    
    const handleCopy = () =>{
     navigator.clipboard.writeText(text)
     document.getSelection().removeAllRanges();
     props.showAlert("The text has been copied successfully","success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
    <>
    <div className="container">
        <h2 className={`text-${change_mode(props.mode)} mb-4`}>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className={`form-control text-${change_mode(props.mode)}`}value={text} style={{backgroundColor: change_textarea(props.mode),
            color:`${props.mode !== 'light' ? 'dark': 'light'}`}}
          id="myBox" 
          rows="8" onChange={handleOnChange} 
        ></textarea>
      </div>
      <button disabled ={text.length === 0} className= "btn btn-primary " onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}  >Convert to Lowecase</button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}  >Clear the area</button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy the text</button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSenClick}  >Convert to sentence</button>
      <button disabled ={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}  >Removing extra spaces</button>
    </div>
    <div className= {`text-${change_mode(props.mode)}`}  >
    <h1>Your text summary</h1>
    <p > {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters and {(text.split('.').length)-1} sentences</p>
    <p>{text.length== 0 ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length> 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  );
}

