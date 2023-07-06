import React, { useState } from "react";


export default function Textbox() {
  const [text, setText] = useState('')

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const convertToUp = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const convertToLow = () => {
    setText(text.toLowerCase())
  }
  const deleteText = () => {
    setText("")
  }

  const copyToClipboard = () => {
    let copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Text copied to clipboard: ' + copyText.value);
  }

  const removeSpace = () => {
    setText(text.replace(/\s+/g, ' '))
  }
  return (
    <>
      <div>
        <div className="mb-3">
        </div>
        <div className="mb-3">
          <h1 className="my-3">Enter the text below</h1>
          <textarea style={{ border: "1px solid black" }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUp}>Upper Case</button>
        <button className="btn btn-primary ms-3" onClick={convertToLow}>Lower Case</button>
        <button className="btn btn-primary ms-3" onClick={copyToClipboard}>Copy Text</button>
        <button className="btn btn-primary ms-3" onClick={removeSpace}>Remove Extra Spaces</button>
        <button className="btn btn-danger ms-3" onClick={deleteText}>Delete</button>
      </div>

      <div className="container mt-3">
        <h1>Text Details</h1>
        <p>Number of words {text.split(" ").length}</p>
        <p>Number of characters {text.length}</p>
      </div>
    </>
  );
}
