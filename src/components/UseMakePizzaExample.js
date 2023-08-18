import { useState } from "react"

export default function UseStateExample() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} />
      <p>input value: {inputValue}</p>
    </div>
  )
}
