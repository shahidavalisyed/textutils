import React, {useState} from 'react'



export default function Textform(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to Uppercase","success")
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked "+text);
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("Changed to LowerCase","success")
    }

    const handleonchange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }

    const handleclearText=()=>{
        let newText=""
        setText(newText);
        props.showAlert("Text Box Cleared","success")
    }

    const handlecopy=()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied","success")
    }
    const handleextraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Renoved Extra spacec between words","success")
    }

    const [text, setText] = useState('');

    // setText("New tz")
  return (
    <>
    <div className='container' style={{color:props.mode==='light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'? 'white':'grey',color:props.mode==='light'? 'black':'white'}} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearText} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handlecopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleextraSpaces} >Remove ExtraSpaces</button>
    </div>
<div className="container my-2" style={{color:props.mode==='light'? 'black':'white'}}>
    <h2> Your Text Summary</h2>
    <p >{((text.trim().split(" ")).filter(function (element) {
                    return element != "";
                })).length} words and {text.length} characters </p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter somthig in the above box to preview Here"}</p>
</div>
    </>
  )
}