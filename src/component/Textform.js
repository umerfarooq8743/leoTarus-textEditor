import React,{useState} from 'react'

export default function Textform(props) {

    const uppercase= ()=>{
        console.log("converter is clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const lowercase= ()=>{
        // console.log("converter is clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const clear= ()=>{
        // console.log("converter is clicked" + text);
        let newText= '';
        setText(newText);
        props.showAlert("Text area clear now!","success")
    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copy successfully","success")
    }
    const handleExtraSpace =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const convertOnchange= (event)=>{
        // console.log("on change")
       setText(event.target.value)
    }

    const [text, setText] = useState("");
// text= "new text";     //wrong way
// setText("new text")   // right way
    return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3 my-3 border border-info">
        <textarea className="form-control" value={text} onChange={convertOnchange} style={{backgroundColor:props.mode
            ==='dark'?'#22568b':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
     </div>
        <button disabled={text.length===0} className="my-2 btn btn-secondary mx-1 " onClick={uppercase}>Convert to Uppercase</button>
        <button disabled={text.length===0}  className="my-2 btn btn-warning mx-1" onClick={lowercase}>Convert to Lowercase</button>
        <button disabled={text.length===0}  className="my-2 btn btn-success  mx-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0}  className="my-2 btn btn-dark   mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        
        <button disabled={text.length===0}  className="my-2 btn btn-danger rounded-pill mx-1" onClick={clear}>Clear text</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p >{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.011* text.split(" ").filter((element)=>{return element.length!=0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
    </>
  )
    
}
