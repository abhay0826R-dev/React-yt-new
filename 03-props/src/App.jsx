import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user="abhay" age={19} pfp='https://plus.unsplash.com/premium_photo-1723514610447-ea912896dc1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBmcCUyMGRhcmslMjB1c2VyfGVufDB8fDB8fHww'/>
      <Card user="johan"/>
      <Card />
    </div>
  )
}

export default App
