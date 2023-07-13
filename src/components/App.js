
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  let[inputValue, setInputValue] = useState("")

  function showInputChange(e){
    setInputValue(e.target.value)
  }

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <p>{inputValue}</p>
        <Child showInputChange={showInputChange}/>
    </div>
  )
}

export default App
