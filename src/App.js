import Advance from 'pages/Advance'
import Basic from 'pages/Basic'
import React from 'react'

function App () {
  return (
    <div>
      <h1>Vertical Progress List Demo</h1>
      <hr />
      <h2>Basic</h2>
      <div style={{ maxWidth: 500 }}>
        <Basic />
      </div>
      <hr />
      <h2>Advance</h2>
      <div style={{ maxWidth: 500 }}>
        <Advance />
      </div>
    </div>
  )
}

export default App
