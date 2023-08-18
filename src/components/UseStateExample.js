import { useState } from "react"

import "./UseStateExample.css"

export default function UseStateExample() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="exampleWrapper">
      <h3>Live Example</h3>
      {/* <input onChange={(e) => setInputValue(e.target.value)} /> */}
      <p>input value: {inputValue}</p>

      <div className="interactiveBoxsWrapper">
        <div className="interactiveBox">
          <div>input box</div>
          <span className="label">input</span>
        </div>

        <div className="interactiveBox">
          <div>result box</div>
          <span className="label">result</span>
        </div>
      </div>
    </div>
  )
}
