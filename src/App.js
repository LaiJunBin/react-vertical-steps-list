import Advance from 'pages/Advance'
import Basic from 'pages/Basic'
import Custom from 'pages/Custom'
import Dark from 'pages/Dark'
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
      <h2>Dark Theme</h2>
      <div style={{ maxWidth: 500 }}>
        <Dark />
      </div>
      <h2>Custom</h2>
      <div style={{ maxWidth: 500 }}>
        <Custom />
      </div>
    </div>
  )
}

export default App
