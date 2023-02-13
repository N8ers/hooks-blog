import "./ArticleSection.css"

function CodeSnippet({ fileName, code }) {
  return (
    <div>
      <div>{fileName}</div>
      <div>{code}</div>
    </div>
  )
}

export default function ArticleSection({ data, children }) {
  return (
    <div className="wrapper">
      <h3>{data.sectionHeader}</h3>
      <p>{data.blurb}</p>
      {children}
      {data.codeSnippets.map((snippet) => (
        <CodeSnippet
          key={snippet.fileName}
          fileName={snippet.fileName}
          code={snippet.code}
        />
      ))}
    </div>
  )
}
