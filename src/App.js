import ArticleSection from "./components/ArticleSection"
import UseStateExample from "./components/UseStateExample"

import data from "./data"

import "./App.css"

function App() {
  return (
    <div className="App">
      <h1 className="header">Building React Hooks</h1>
      <ArticleSection data={data[0]}>
        <UseStateExample />
      </ArticleSection>

      <ArticleSection data={data[1]}>
        <div>
          <h5>Live Example</h5>
          <input />
          <p>input value: __</p>
        </div>
      </ArticleSection>
    </div>
  )
}

export default App
